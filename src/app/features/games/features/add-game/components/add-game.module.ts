import {NgModule} from "@angular/core";
import {AddGameComponent} from "./add-game/add-game.component";
import {CommonModule} from "@angular/common";
import {AddGameRoutingModule} from "./add-game-routing.module";

@NgModule({
    imports: [CommonModule, AddGameRoutingModule],
    declarations: [AddGameComponent]
})
export class AddGameModule {}
