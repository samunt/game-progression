import {NgModule} from "@angular/core";
import {EditGameComponent} from "./edit-game/edit-game.component";
import {CommonModule} from "@angular/common";
import {EditGameRoutingModule} from "./edit-game-routing.module";
import {UiLibraryModule} from "../../../../../modules/ui-library";

@NgModule({
    imports: [CommonModule, EditGameRoutingModule, UiLibraryModule],
    declarations: [EditGameComponent]
})
export class EditGameModule {}
