import { NgModule } from "@angular/core";
import { EditProfileModule } from "./features/edit-profile/edit-profile.module";
import {StoreModule} from "@ngrx/store";
import {ProfileReducer} from "./store/profile.reducer";
import {ProfileStore} from "./store/profile.store";
import {EffectsModule} from "@ngrx/effects";
import {ProfileEffects} from "./store/profile.effect";

@NgModule({
  imports: [EditProfileModule,
    StoreModule.forFeature('profileState', ProfileReducer),
    EffectsModule.forFeature([ProfileEffects])
  ],
  declarations: [],
  providers: [ProfileStore]
})
export class ProfileModule {}
