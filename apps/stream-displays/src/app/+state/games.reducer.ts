import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as GamesActions from './games.actions';
import { Game } from '../../../../../libs/types/games/game.interface';

export const GAMES_FEATURE_KEY = 'games';

export interface State extends EntityState<Game> {
  selectedId?: string | number; // which Games record has been selected
  loaded: boolean; // has the Games list been loaded
  error?: string | null; // last known error (if any)
}

export interface GamesPartialState {
  readonly [GAMES_FEATURE_KEY]: State;
}

export const gamesAdapter: EntityAdapter<Game> = createEntityAdapter<Game>();

export const initialState: State = gamesAdapter.getInitialState({
  // set initial required properties
  loaded: false,
  loading: false,
});

const gamesReducer = createReducer(
  initialState,
  on(GamesActions.init, (state) => ({ ...state, loaded: false, error: null })),
  on(GamesActions.addGame, (state, props) => ({ ...state, loading: true })),
  on(GamesActions.addGameSuccess, (state, props) => ({
    ...gamesAdapter.addOne(props.game, state),
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return gamesReducer(state, action);
}
