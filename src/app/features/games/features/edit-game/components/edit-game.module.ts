import {NgModule} from "@angular/core";
import {EditGameComponent} from "./edit-game/edit-game.component";
import {CommonModule} from "@angular/common";
import {EditGameRoutingModule} from "./edit-game-routing.module";

@NgModule({
    imports: [CommonModule, EditGameRoutingModule],
    declarations: [EditGameComponent]
})
export class EditGameModule {}
