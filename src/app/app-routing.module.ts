import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'profile-details',
    pathMatch: 'full'
  },
  { path: 'profile-details', loadChildren: 'src/app/features/profile/features/profile-details/profile-details.module#ProfileDetailsModule' },
  { path: 'edit-profile', loadChildren: 'src/app/features/profile/features/edit-profile/edit-profile.module#EditProfileModule' },
  { path: 'list-games', loadChildren: 'src/app/features/games/features/list-games/list-games.module#ListGamesModule' },
  { path: 'add-game', loadChildren: 'src/app/features/games/features/add-game/add-game.module#AddGameModule' },
  { path: 'edit-game/:id', loadChildren: 'src/app/features/games/features/edit-game/edit-game.module#EditGameModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
