import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MatchPageComponent } from './pages/match-page/match-page.component';
import { FixturePageComponent } from './pages/fixture-page/fixture-page.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'match', pathMatch: 'full'
  },
  { path: 'match', component: FixturePageComponent},
  { path: 'match/:id', component: MatchPageComponent},
  { path: 'login', component: LoginComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
