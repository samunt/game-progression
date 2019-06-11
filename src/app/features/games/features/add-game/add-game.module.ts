import {NgModule} from "@angular/core";
import {AddGameComponent} from "./components/add-game/add-game.component";
import {CommonModule} from "@angular/common";
import {AddGameRoutingModule} from "./add-game-routing.module";
import {UiLibraryModule} from "../../../../modules/ui-library";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
    imports: [CommonModule, AddGameRoutingModule, UiLibraryModule, ReactiveFormsModule],
    declarations: [AddGameComponent]
})
export class AddGameModule {}
