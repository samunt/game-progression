import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesAddComponent } from './games-add/games-add.component';
import { GamesEditComponent } from './games-edit/games-edit.component';
import { GamesDeleteComponent } from './games-delete/games-delete.component';
import { GamesListComponent } from './games-list/games-list.component';

@NgModule({
  declarations: [GamesAddComponent, GamesEditComponent, GamesDeleteComponent, GamesListComponent],
  imports: [
    CommonModule
  ]
})
export class GamesModule { }
