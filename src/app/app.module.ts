import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from 'src/app/components/app/app.component';
import {Action, ActionReducerMap, StoreModule} from '@ngrx/store';
import { ProfileModule } from "./features/profile/profile.module";
import { GamesModule } from "./features/games/features/games.module";
import {UiLibraryModule} from "./modules/ui-library";
import { RouterModule } from "@angular/router";
import {AppNavigationComponent} from "./components";
import {GamingContentComponent} from "./components";
import {AppRoutingModule} from "./app-routing.module";
import { storeConfig } from 'src/app/store/app.reducer';
import {DataService} from "./services";
import {EffectsModule} from "@ngrx/effects";
import {HttpClientModule} from "@angular/common/http";
import {ProfileStore} from "./features/profile/store/profile.store";
import {AppState} from "./types/app-state";

@NgModule({
  declarations: [
    AppComponent,
    AppNavigationComponent,
    GamingContentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    ProfileModule,
    GamesModule,
    UiLibraryModule,
    HttpClientModule,
    StoreModule.forRoot({} as ActionReducerMap<AppState, Action>, storeConfig),
    EffectsModule.forRoot([])
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
