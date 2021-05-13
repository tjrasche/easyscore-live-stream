import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddGamesComponent } from './add-games/add-games.component';
const routes: Routes = [
  {
    path: '',
    component: AddGamesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
