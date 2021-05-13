import { TestBed } from '@angular/core/testing';
import { XmlResponseHandlerService } from './xml-response-handler.service';
import { of } from 'rxjs';

describe('XmlResponseHandler', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [XmlResponseHandlerService],
    }).compileComponents();
  });
  it('should transform a correct xml response from easyscore to an object implementing the Game Interface', () => {
    const xmlResponseHandlerService = TestBed.inject(XmlResponseHandlerService);
    const mockResponse =
      '<GameInfo_WS xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns="https://www.easyscore.com/GameInfo">\n' +
      '<GameNumber>10120703-1</GameNumber>\n' +
      '<GameDate>2021-05-13T00:00:00</GameDate>\n' +
      '<StartTime>12:00:00</StartTime>\n' +
      '<EndTime/>\n' +
      '<GameTime/>\n' +
      '<League>1. Baseball-Bundesliga</League>\n' +
      '<Round>Süd</Round>\n' +
      '<AwayTeam>Mannheim Tornados (1. Baseball-Bundesliga)</AwayTeam>\n' +
      '<AwayTeamLogo>https://img.easyscore.com/img/teamlogos/logo_mannheimtornados.png</AwayTeamLogo>\n' +
      '<HomeTeam>München-Haar Disciples (1. Baseball-Bundesliga)</HomeTeam>\n' +
      '<HomeTeamLogo>https://img.easyscore.com/img/teamlogos/logo_haardisciples.png</HomeTeamLogo>\n' +
      '<Umpires/>\n' +
      '<Notes/>\n' +
      '<Scorer/>\n' +
      '<Field>Disciples München-Haar - Ballpark Eglfing</Field>\n' +
      '<Temperature/>\n' +
      '<Attendance/>\n' +
      '<Forfeit>0</Forfeit>\n' +
      '<Win/>\n' +
      '<Loss/>\n' +
      '<Save/>\n' +
      '<LineScoreAwayTeam>2|0|0|1|1|2|6|12|14|2</LineScoreAwayTeam>\n' +
      '<LineScoreHomeTeam>3|2|0|2|0|1|0|8|10|1</LineScoreHomeTeam>\n' +
      '<RunsAway>12</RunsAway>\n' +
      '<RunsHome>8</RunsHome>\n' +
      '<LOBAway>4</LOBAway>\n' +
      '<LOBHome>9</LOBHome>\n' +
      '<DPAway/>\n' +
      '<DPHome/>\n' +
      '<GameLeaders/>\n' +
      '<PlayByPlay><![CDATA[<h3>MANNHEIM TORNADOS 1ST</h3><h4 class="currentPitcher">Steinlein pitching</h4> - TOMIC Andrija doubled to right center field on the first pitch.<br />- BENDLIN Merlin struck out swinging, catcher to first on a 1-2 count.<br /><strong>- DE WOLF Thomas homered to right center field on a 2-1 count, TOMIC Andrija scored.<br /></strong>- KULINNA Marvin struck out swinging on a full count.<br />- ROMBERG Derek grounded out, pitcher to first on a 0-2 count.<br /><p>2 Runs, 2 Hits, 0 Errors<br />Mannheim Tornados 2, München-Haar Disciples 0</p><h3>MÜNCHEN-HAAR DISCIPLES 1ST</h3><h4 class="currentPitcher">Riello Quiroga pitching</h4> - THOMAS Nateshon doubled to left on a 0-2 count.<br />- RIESTRA Francisco lined out to second on the first pitch.<br />- THOMAS Nateshon stole third.<br /><strong>- THORP William singled up the middle on a 1-2 count, THOMAS Nateshon scored.<br /></strong><strong>- DINSKI David homered to right center field on a full count, THORP William scored.<br /></strong>- PATRICE Daniel walked on a 3-1 count.<br />- LECHNER Simon flied out to right on a 1-0 count.<br />- INFANTE Juan grounded out, shortstop to first on a 1-1 count.<br /><p>3 Runs, 3 Hits, 0 Errors<br />Mannheim Tornados 2, München-Haar Disciples 3</p><h3>MANNHEIM TORNADOS 2ND</h3><h4 class="currentPitcher">Steinlein pitching</h4> - MARTIN Juan struck out to catcher on a 0-2 count.<br />- TISSERA GRAFEUILLE Augustin grounded out, shortstop to first on a 1-0 count.<br />- HELMIG Rex fouled out to first on a 3-1 count.<br /><p>0 Runs, 0 Hits, 0 Errors<br />Mannheim Tornados 2, München-Haar Disciples 3</p><h3>MÜNCHEN-HAAR DISCIPLES 2ND</h3><h4 class="currentPitcher">Riello Quiroga pitching</h4> - MUSCHIK Enzo doubled to center on a 3-1 count.<br /><strong>- PINEIRO Miguel doubled to right on a 1-0 count, MUSCHIK Enzo scored.<br /></strong>- THOMAS Nateshon grounded out, third to first.<br />- RIESTRA Francisco walked on a 3-1 count.<br />- THORP William singled to third on the first pitch, PINEIRO Miguel to third, RIESTRA Francisco to second.<br /><strong>- PINEIRO Miguel scored on Kevin Leonardo Riello Quiroga wild pitch, RIESTRA Francisco to third, THORP William to second.<br /></strong>- DINSKI David struck out swinging to catcher on a 1-2 count.<br />- PATRICE Daniel flied out to right on a full count.<br /><p>2 Runs, 3 Hits, 0 Errors<br />Mannheim Tornados 2, München-Haar Disciples 5</p><h3>MANNHEIM TORNADOS 3RD</h3><h4 class="currentPitcher">Steinlein pitching</h4> - HÖPFNER Dominik flied out to center on a 1-1 count.<br />- TOMIC Andrija grounded out to first on a 0-1 count.<br />- BENDLIN Merlin flied out to center on the first pitch.<br /><p>0 Runs, 0 Hits, 0 Errors<br />Mannheim Tornados 2, München-Haar Disciples 5</p><h3>MÜNCHEN-HAAR DISCIPLES 3RD</h3><h4 class="currentPitcher">Riello Quiroga pitching</h4> - LECHNER Simon grounded out, second to first on a 2-1 count.<br />- INFANTE Juan grounded out, second to first on a 0-1 count.<br />- MUSCHIK Enzo walked on a full count.<br />- PINEIRO Miguel singled to right on a 0-1 count, MUSCHIK Enzo to third.<br /><h4 class="currentPitcher">Martin pitching</h4> - THOMAS Nateshon struck out swinging, reached first on fielder\'s choice.<br />- RIESTRA Francisco lined out to pitcher.<br /><p>0 Runs, 1 Hit, 0 Errors<br />Mannheim Tornados 2, München-Haar Disciples 5</p><h3>MANNHEIM TORNADOS 4TH</h3><h4 class="currentPitcher">Steinlein pitching</h4> - DE WOLF Thomas struck out looking on a full count.<br />- KULINNA Marvin singled to right center field on a 0-1 count.<br />- ROMBERG Derek struck out swinging on a 0-2 count.<br />- MARTIN Juan singled to third on a 0-1 count, KULINNA Marvin to second.<br /><strong>- TISSERA GRAFEUILLE Augustin singled to right on a 2-0 count, KULINNA Marvin scored, MARTIN Juan to third.<br /></strong>- HELMIG Rex walked on a full count, TISSERA GRAFEUILLE Augustin to second.<br />- HÖPFNER Dominik grounded out, shortstop to second on a 1-0 count.<br /><p>1 Run, 3 Hits, 0 Errors<br />Mannheim Tornados 3, München-Haar Disciples 5</p><h3>MÜNCHEN-HAAR DISCIPLES 4TH</h3><h4 class="currentPitcher">Martin pitching</h4> - THORP William walked on a 3-0 count.<br />- DINSKI David hit sacrifice bunt, pitcher to first on the first pitch, THORP William to second.<br />- PATRICE Daniel flied out to right on a 0-2 count, THORP William to third.<br />- LECHNER Simon walked on a 3-0 count.<br /><strong>- INFANTE Juan singled through the right side on a 1-1 count, THORP William scored, LECHNER Simon to third.<br /></strong><strong>- Enzo Muschik singled, Simon Lechner scored.<br /></strong>- PINEIRO Miguel lined out to shortstop on a 1-2 count.<br /><p>2 Runs, 2 Hits, 0 Errors<br />Mannheim Tornados 3, München-Haar Disciples 7</p><h3>MANNHEIM TORNADOS 5TH</h3><h4 class="currentPitcher">Steinlein pitching</h4> - TOMIC Andrija doubled to right on a 2-0 count.<br />- BENDLIN Merlin grounded out, first to pitcher on the first pitch, TOMIC Andrija to third.<br />- DE WOLF Thomas walked on a 3-1 count.<br /><strong>- KULINNA Marvin hit sacrifice fly to center on a 1-0 count, TOMIC Andrija scored, DE WOLF Thomas to second.<br /></strong>- ROMBERG Derek flied out to shortstop on a 1-2 count.<br /><p>1 Run, 1 Hit, 0 Errors<br />Mannheim Tornados 4, München-Haar Disciples 7</p><h3>MÜNCHEN-HAAR DISCIPLES 5TH</h3><h4 class="currentPitcher">Martin pitching</h4> - THOMAS Nateshon flied out to center on a 1-1 count.<br />- RIESTRA Francisco grounded out, pitcher to shortstop to first on a 1-2 count.<br />- THORP William grounded out, third to first on the first pitch.<br /><p>0 Runs, 0 Hits, 0 Errors<br />Mannheim Tornados 4, München-Haar Disciples 7</p><h3>MANNHEIM TORNADOS 6TH</h3><h4 class="currentPitcher">Steinlein pitching</h4> - MARTIN Juan singled up the middle on the first pitch.<br /><strong>- TISSERA GRAFEUILLE Augustin homered to left on a 1-0 count, MARTIN Juan scored.<br /></strong>- HELMIG Rex flied out to right on the first pitch.<br />- HÖPFNER Dominik flied out to right on a 0-1 count.<br />- TOMIC Andrija grounded out, second to first on a 2-2 count.<br /><p>2 Runs, 2 Hits, 0 Errors<br />Mannheim Tornados 6, München-Haar Disciples 7</p><h3>MÜNCHEN-HAAR DISCIPLES 6TH</h3><h4 class="currentPitcher">Martin pitching</h4> - DINSKI David safe at first on error by third baseman Derek Romberg on a 1-2 count.<br />- DINSKI David stole second.<br />- DINSKI David safe at third on Juan Martin wild pitch.<br />- PATRICE Daniel popped out to first on a 1-1 count.<br /><strong>- LECHNER Simon doubled to right on a 1-0 count, DINSKI David scored.<br /></strong>- INFANTE Juan flied out to second on a 0-2 count.<br />- MUSCHIK Enzo grounded out, pitcher to first on a 0-1 count.<br /><p>1 Run, 1 Hit, 1 Error<br />Mannheim Tornados 6, München-Haar Disciples 8</p><h3>MANNHEIM TORNADOS 7TH</h3><h4 class="currentPitcher">Von Kapff pitching</h4> - BENDLIN Merlin singled through the right side on a 2-2 count.<br />- DE WOLF Thomas walked on a full count, BENDLIN Merlin to second, DE WOLF Thomas out, pitcher to shortstop.<br /><strong>- KULINNA Marvin safe at first on error by shortstop Nateshon Thomas on a 0-1 count, BENDLIN Merlin to third, BENDLIN Merlin scored, KULINNA Marvin to second.<br /></strong><strong>- ROMBERG Derek singled to right, KULINNA Marvin scored.<br /></strong><strong>- MARTIN Juan homered to right center field, ROMBERG Derek scored.<br /></strong>- TISSERA GRAFEUILLE Augustin hit by pitch.<br />- HELMIG Rex singled to right, TISSERA GRAFEUILLE Augustin to second.<br /><strong>- HÖPFNER Dominik singled through the right side, TISSERA GRAFEUILLE Augustin scored, HELMIG Rex to third.<br /></strong><h4 class="currentPitcher">Endrejat pitching</h4> <strong>- TOMIC Andrija doubled down the left field line on a 2-0 count, HELMIG Rex scored, HÖPFNER Dominik to third.<br /></strong><p>6 Runs, 6 Hits, 1 Error</p>Mannheim Tornados 12, München-Haar Disciples 8]]></PlayByPlay>\n' +
      '</GameInfo_WS>';
    xmlResponseHandlerService
      .handleGamesResponse('11671')(of(mockResponse))
      .subscribe((val) => {
        console.log(val);
        expect(val).toBeTruthy();
      });
  });
});
