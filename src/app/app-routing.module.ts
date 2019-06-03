import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'profile-details',
    pathMatch: 'full'
  },
  { path: 'profile-details', loadChildren: 'src/app/features/profile/features/profile-details/components/profile-details.module.ts#ProfileDetailsModule' },
  { path: 'edit-profile', loadChildren: 'src/app/features/profile/features/edit-profile/edit-profile.module.ts#EditProfileModule' },
  { path: 'add-game', loadChildren: './features/session/session.module#SessionModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
