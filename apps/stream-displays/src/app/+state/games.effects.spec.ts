import { TestBed } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { DataPersistence, NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { GamesEffects } from './games.effects';
import * as GamesActions from './games.actions';

describe('GamesEffects', () => {
  let actions: Observable<any>;
  let effects: GamesEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        GamesEffects,
        DataPersistence,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(GamesEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: GamesActions.init() });

      const expected = hot('-a-|', {
        a: GamesActions.loadGamesSuccess({ games: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
