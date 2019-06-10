import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AddGameModule} from "./add-game/components/add-game.module";
import {EditGameModule} from "./edit-game/components/edit-game.module";
import {ListGamesModule} from "./list-games/list-games.module";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AddGameModule,
    EditGameModule,
    ListGamesModule
  ]
})
export class GamesModule { }
