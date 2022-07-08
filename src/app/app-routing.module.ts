import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatchPageComponent } from './pages/match-page/match-page.component';

const routes: Routes = [
  { path: 'match/:id', component: MatchPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
