import {NgModule} from "@angular/core";
import {EditGameComponent} from "./components/edit-game/edit-game.component";
import {CommonModule} from "@angular/common";
import {EditGameRoutingModule} from "./edit-game-routing.module";
import {UiLibraryModule} from "../../../../modules/ui-library";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
    imports: [CommonModule, EditGameRoutingModule, UiLibraryModule, ReactiveFormsModule],
    declarations: [EditGameComponent]
})
export class EditGameModule {}
