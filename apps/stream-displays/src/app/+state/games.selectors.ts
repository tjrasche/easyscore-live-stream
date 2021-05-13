import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  GAMES_FEATURE_KEY,
  State,
  GamesPartialState,
  gamesAdapter,
} from './games.reducer';

// Lookup the 'Games' feature state managed by NgRx
export const getGamesState = createFeatureSelector<GamesPartialState, State>(
  GAMES_FEATURE_KEY
);

const { selectAll, selectEntities } = gamesAdapter.getSelectors();

export const getGamesLoaded = createSelector(
  getGamesState,
  (state: State) => state.loaded
);

export const getGamesError = createSelector(
  getGamesState,
  (state: State) => state.error
);

export const getAllGames = createSelector(getGamesState, (state: State) =>
  selectAll(state)
);

export const getGamesEntities = createSelector(getGamesState, (state: State) =>
  selectEntities(state)
);

export const getSelectedId = createSelector(
  getGamesState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getGamesEntities,
  getSelectedId,
  (entities, selectedId) => selectedId && entities[selectedId]
);
