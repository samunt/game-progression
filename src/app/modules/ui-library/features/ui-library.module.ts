import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TitleComponent} from "./title/title.component";
import {MenuComponent} from "./menu/menu.component";
import {LayoutComponent} from "./layout/layout.component";
import {InputComponent} from "./input/input.component";
import {HeaderComponent} from "./header/header.component";
import {GameFiltersComponent} from "./game-filters/game-filters.component";
import {FooterComponent} from "./footer/footer.component";
import {DashboardComponent} from "./dashboard/dashboard/dashboard.component";
import {CompletedComponent} from "./completed/completed.component";
import {CardComponent} from "./card/card.component";
import {ButtonComponent} from "./button/button.component";
import {AvatarComponent} from "./avatar/avatar.component";
import {AppNavigationMenuItemComponent} from "./app-navigation-menu-item/app-navigation-menu-item.component";
import {AppNavigationComponent} from "./app-navigation/app-navigation.component";

@NgModule({
  declarations: [
      TitleComponent,
      MenuComponent,
      LayoutComponent,
      InputComponent,
      HeaderComponent,
      GameFiltersComponent,
      FooterComponent,
      DashboardComponent,
      CompletedComponent,
      CardComponent,
      ButtonComponent,
      AvatarComponent,
      AppNavigationMenuItemComponent,
      AppNavigationComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UiLibraryModule { }
