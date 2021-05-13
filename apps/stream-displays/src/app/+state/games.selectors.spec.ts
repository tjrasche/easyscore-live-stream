import { State, gamesAdapter, initialState } from './games.reducer';
import * as GamesSelectors from './games.selectors';
import { Game } from '../../../../../libs/types/games/game.interface';

describe('Games Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getGamesId = (it) => it['id'];
  const createGamesEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as Game);

  let state;

  beforeEach(() => {
    state = {
      games: gamesAdapter.setAll(
        [
          createGamesEntity('PRODUCT-AAA'),
          createGamesEntity('PRODUCT-BBB'),
          createGamesEntity('PRODUCT-CCC'),
        ],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Games Selectors', () => {
    it('getAllGames() should return the list of Games', () => {
      const results = GamesSelectors.getAllGames(state);
      const selId = getGamesId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = GamesSelectors.getSelected(state);
      const selId = getGamesId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getGamesLoaded() should return the current 'loaded' status", () => {
      const result = GamesSelectors.getGamesLoaded(state);

      expect(result).toBe(true);
    });

    it("getGamesError() should return the current 'error' state", () => {
      const result = GamesSelectors.getGamesError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
