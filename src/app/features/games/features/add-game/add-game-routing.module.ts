import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AddGameComponent} from "./components/add-game/add-game.component";

const routes: Routes = [
    {
        path: '',
        component: AddGameComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AddGameRoutingModule {}
