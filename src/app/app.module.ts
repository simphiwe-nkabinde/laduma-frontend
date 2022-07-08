import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatchPageComponent } from './pages/match-page/match-page.component';
import { TabMenuComponent } from './components/tab-menu/tab-menu.component';
import { LoginComponent } from './pages/login/login.component';
import { FixturePageComponent } from './pages/fixture-page/fixture-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MatchPageComponent,
    TabMenuComponent,
    LoginComponent,
    FixturePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
