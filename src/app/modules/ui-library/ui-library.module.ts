import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppNavigationMenuItemComponent} from "./components/app-navigation-menu-item/components/app-navigation-menu-item.component";
import {AvatarComponent} from "./components/avatar/components/avatar.component";
import {ButtonComponent} from "./components/button/components/button.component";
import {CardComponent} from "./components/card/components/card.component";
import {CompletedComponent} from "./components/completed/components/completed.component";
import {FooterComponent} from "./components/footer/components/footer.component";
import {GameFiltersComponent} from "./components/game-filters/components/game-filters.component";
import {TitleComponent} from "./components/title/components/title.component";
const components = [
    AppNavigationMenuItemComponent,
    AvatarComponent,
    ButtonComponent,
    CardComponent,
    CompletedComponent,
    FooterComponent,
    GameFiltersComponent,
    FooterComponent,
    CompletedComponent,
    CardComponent,
    ButtonComponent,
    AvatarComponent,
    TitleComponent
];
@NgModule({
    imports: [CommonModule],
    declarations: [components],
    exports: components
})
export class UiLibraryModule {}
