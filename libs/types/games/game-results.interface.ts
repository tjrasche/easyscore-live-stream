import { ScoresPerInning } from './scores-per-inning.type';

export interface GameResults {
  home: ScoresPerInning;
  away: ScoresPerInning;
}
