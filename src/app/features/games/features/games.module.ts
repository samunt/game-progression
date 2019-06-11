import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AddGameModule} from "./add-game/add-game.module";
import {EditGameModule} from "./edit-game/edit-game.module";
import {ListGamesModule} from "./list-games/list-games.module";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {GameReducer} from "../store/game.reducer";
import {GameStore} from "../store/game.store";
import {GameEffects} from "src/app/features/games/store/game.effects";
import {UiLibraryModule} from "../../../modules/ui-library";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AddGameModule,
    EditGameModule,
    ListGamesModule,
    UiLibraryModule,
    StoreModule.forFeature('gameState', GameReducer),
    EffectsModule.forFeature([GameEffects])
  ],
  providers: [GameStore]
})
export class GamesModule { }
