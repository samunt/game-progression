import {NgModule} from "@angular/core";
import {ListGamesComponent} from "src/app/features/games/features/list-games/components/list-games.component";
import {CommonModule} from "@angular/common";
import {ListGamesRoutingModule} from "src/app/features/games/features/list-games/list-games-routing.module";
import {UiLibraryModule} from "../../../../modules/ui-library";
@NgModule({
    imports: [CommonModule, ListGamesRoutingModule, UiLibraryModule],
    declarations: [ListGamesComponent]
})
export class ListGamesModule {}
