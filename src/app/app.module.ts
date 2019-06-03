import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { AppNavigationComponent } from './modules/ui-library/features/app-navigation/app-navigation.component';
import { AppNavigationMenuItemComponent } from './modules/ui-library/features/app-navigation-menu-item/app-navigation-menu-item.component';
import { LayoutComponent } from './modules/ui-library/features/layout/layout.component';
import { HeaderComponent } from './modules/ui-library/features/header/header.component';
import { FooterComponent } from './modules/ui-library/features/footer/footer.component';
import { AvatarComponent } from './modules/ui-library/features/avatar/avatar.component';
import { TitleComponent } from './modules/ui-library/features/title/title.component';
import { ButtonComponent } from './modules/ui-library/features/button/button.component';
import { MenuComponent } from './modules/ui-library/features/menu/menu.component';
import { InputComponent } from './modules/ui-library/features/input/input.component';
import { GameFiltersComponent } from './modules/ui-library/features/game-filters/game-filters.component';
import { CardComponent } from './modules/ui-library/features/card/card.component';
import { CompletedComponent } from './modules/ui-library/features/completed/completed.component';
import { AddGameComponent } from './features/games/features/add-game/components/add-game/add-game.component';
import { EditGameComponent } from './features/games/features/edit-game/components/edit-game/edit-game.component';
import { ProfileDetailsComponent } from './features/profile/features/profile-details/components/profile-details/profile-details.component';
import { EditProfileComponent } from './features/profile/features/edit-profile/components/edit-profile/edit-profile.component'
import {ProfileModule} from "./features/profile/features/profile.module";
import {GamesModule} from "./features/games/features/games.module";
@NgModule({
  declarations: [
    AppComponent,
    AppNavigationComponent,
    AppNavigationMenuItemComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    AvatarComponent,
    TitleComponent,
    ButtonComponent,
    MenuComponent,
    InputComponent,
    GameFiltersComponent,
    CardComponent,
    CompletedComponent,
    AddGameComponent,
    EditGameComponent,
    ProfileDetailsComponent,
    EditProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProfileModule,
    GamesModule,
    StoreModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
