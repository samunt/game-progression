import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'profile-details',
    pathMatch: 'full'
  },
  { path: 'profile-details', loadChildren: './features/profile/features/profile-details/profile-details.module#ProfileDetailsModule' },
  { path: 'edit-profile', loadChildren: 'src/app/features/profile/features/edit-profile/edit-profile.module#EditProfileModule' },
  { path: 'add-game', loadChildren: 'src/app/features/games/features/add-game/components/add-game.module.ts#AddGameModule' },
  { path: 'edit-game', loadChildren: 'src/app/features/games/features/edit-game/components/edit-game.module.ts#EditGameModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
