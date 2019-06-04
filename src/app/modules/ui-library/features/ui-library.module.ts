import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TitleModule} from "./title/title.module";
import {MenuModule} from "./menu/menu.module";
import {LayoutModule} from "./layout/layout.module";
import {InputModule} from "./input/input.module";
import {HeaderModule} from "./header/header.module";
import {GameFiltersModule} from "./game-filters/game-filters.module";
import {FooterModule} from "./footer/footer.module";
import {CompletedModule} from "./completed/completed.module";
import {CardModule} from "./card/card.module";
import {ButtonModule} from "./button/button.module";
import {AvatarModule} from "./avatar/avatar.module";
import {AppNavigationMenuItemModule} from "./app-navigation-menu-item/app-navigation-menu-item.module";
const modules = [
    TitleModule,
    // MenuModule,
    // LayoutModule,
    // InputModule,
    // HeaderModule,
    // GameFiltersModule,
    // FooterModule,
    // CompletedModule,
    // CardModule,
    // ButtonModule,
    // AvatarModule,
    // AppNavigationMenuItemModule
];
@NgModule({
    imports: [CommonModule, ...modules],
    exports: modules
})
export class UiLibraryModule {}
