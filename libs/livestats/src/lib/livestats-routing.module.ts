import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatsListComponent } from './components/stats-list/stats-list.component';
const routes: Routes = [
  {
    path: '',
    component: StatsListComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class LivestatsRoutingModule {}
