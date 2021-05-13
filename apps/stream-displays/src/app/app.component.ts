import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromGames from './+state/games.selectors';
import * as GamesActions from './+state/games.actions';
import { FormControl, FormGroup } from '@ngneat/reactive-forms';

@Component({
  selector: 'easy-score-livestream-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  games$ = this.store.select(fromGames.getAllGames);
  gameIdForm = new FormControl<string>('');
  title = 'stream-displays';
  addGame(): void {
    console.log(this.gameIdForm.value);
    this.store.dispatch(GamesActions.addGame({ id: this.gameIdForm.value }));
  }
  constructor(private store: Store) {}
}
