import { Team } from './team.interface';
import { GameId } from './game-id.type';

export interface Game {
  id: GameId;
  date: Date;
  league: string;
  round: string;
  homeTeam: Team;
  awayTeam: Team;
  umpires: string[];
  time: string;
}
