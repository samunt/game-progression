import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {EditGameComponent} from "./edit-game/edit-game.component";

const routes: Routes = [
    {
        path: '',
        component: EditGameComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EditGameRoutingModule {}
