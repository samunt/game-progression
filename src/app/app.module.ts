import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from 'src/app/components/app/components/app/app.component';
import { StoreModule } from '@ngrx/store';
import { ProfileModule } from "./features/profile/features/profile.module";
import { GamesModule } from "./features/games/features/games.module";
import {UiLibraryModule} from "./modules/ui-library";
import { RouterModule } from "@angular/router";
import {AppNavigationComponent} from "./components/app/components";
import {GamingContentComponent} from "./components/app/components";
import {AppRoutingModule} from "./app-routing.module";
import { storeConfig } from 'src/app/components/app/components/app/store/app.reducer';
import {DataService} from "./services";
import {HttpClient, HttpClientModule} from "@angular/common/http";

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
    StoreModule.forRoot({}, storeConfig)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
