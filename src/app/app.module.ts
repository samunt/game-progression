import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from 'src/app/components/app/app.component';
import { StoreModule } from '@ngrx/store';
import { ProfileModule } from "./features/profile/features/profile.module";
import { GamesModule } from "./features/games/features/games.module";
import { UiLibraryModule } from "./modules/ui-library/features/ui-library.module";
import { RouterModule } from "@angular/router";
import {AppNavigationModule} from "./components/app/components/app-navigation/app-navigation.module";
import {GamingContentModule} from "./components/app/components/gaming-content/gaming-content.module";

@NgModule({
  declarations: [
      AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    ProfileModule,
    GamesModule,
    UiLibraryModule,
    AppNavigationModule,
    GamingContentModule,
    StoreModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
