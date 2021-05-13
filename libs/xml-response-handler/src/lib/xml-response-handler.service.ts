import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from '../../../types/games/game.interface';
import { map, tap } from 'rxjs/operators';
import * as parser from 'fast-xml-parser';
import { GameId } from '../../../types/games/game-id.type';

@Injectable({
  providedIn: 'root',
})
export class XmlResponseHandlerService {
  public handleGamesResponse(
    id: GameId
  ): (gamesResponse: Observable<string>) => Observable<Game> {
    return (gamesResponse) =>
      gamesResponse.pipe(
        map((xml) => parser.parse(xml), { cdataTagName: '__cdata' }),
        map((val) => val.GameInfo_WS),
        map(
          (obj): Game => ({
            id,
            date: new Date(obj.GameDate),
            round: obj.Round,
            league: obj.League,
            homeTeam: {
              name: obj.HomeTeam,
              logo: obj.HomeTeamLogo,
            },
            awayTeam: {
              name: obj.AwayTeam,
              logo: obj.AwayTeamLogo,
            },
            umpires: obj.Umpires,
            time: obj.StartTime.substring(0, obj.StartTime.length - 3),
          })
        )
      );
  }
}
