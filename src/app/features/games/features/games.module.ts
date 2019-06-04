import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AddGameModule} from "./add-game/components/add-game.module";
import {EditGameModule} from "./edit-game/components/edit-game.module";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AddGameModule,
    EditGameModule,
  ]
})
export class GamesModule { }
