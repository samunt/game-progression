import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ListGamesComponent} from "src/app/features/games/features/list-games/components/list-games.component";

const routes: Routes = [
    {
        path: '',
        component: ListGamesComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ListGamesRoutingModule {}
