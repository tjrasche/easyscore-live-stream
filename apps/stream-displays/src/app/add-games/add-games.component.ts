import { Component, OnInit } from '@angular/core';
import * as fromGames from '../+state/games.selectors';
import { FormControl } from '@ngneat/reactive-forms';
import * as GamesActions from '../+state/games.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'easy-score-livestream-add-games',
  templateUrl: './add-games.component.html',
  styleUrls: ['./add-games.component.scss'],
})
export class AddGamesComponent {
  games$ = this.store.select(fromGames.getAllGames);
  gameIdForm = new FormControl<string>('');

  addGame(): void {
    console.log(this.gameIdForm.value);
    this.store.dispatch(GamesActions.addGame({ id: this.gameIdForm.value }));
  }
  constructor(private store: Store) {}
}
