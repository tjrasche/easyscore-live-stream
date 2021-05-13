import { createAction, props } from '@ngrx/store';
import { Game } from '../../../../../libs/types/games/game.interface';
import { GameId } from '../../../../../libs/types/games/game-id.type';

export const init = createAction('[Games Page] Init');

export const addGame = createAction(
  '[Games Page] add Game',
  props<{ id: GameId }>()
);

export const addGameSuccess = createAction(
  '[Games Page] add Game Success',
  props<{ game: Game }>()
);

export const addGamesFailure = createAction('[Games Page] add Game Failure');
