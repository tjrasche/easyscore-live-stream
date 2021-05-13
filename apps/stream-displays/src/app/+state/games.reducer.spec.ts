import { GamesEntity } from './games.models';
import * as GamesActions from './games.actions';
import { State, initialState, reducer } from './games.reducer';

describe('Games Reducer', () => {
  const createGamesEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as GamesEntity);

  beforeEach(() => {});

  describe('valid Games actions', () => {
    it('loadGamesSuccess should return set the list of known Games', () => {
      const games = [
        createGamesEntity('PRODUCT-AAA'),
        createGamesEntity('PRODUCT-zzz'),
      ];
      const action = GamesActions.loadGamesSuccess({ games });

      const result: State = reducer(initialState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
