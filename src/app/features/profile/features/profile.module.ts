import { NgModule } from "@angular/core";
import { EditProfileModule } from "./edit-profile/edit-profile.module";
import {StoreModule} from "@ngrx/store";
import {ProfileReducer} from "../store/profile.reducer";
import {ProfileStore} from "../store/profile.store";

@NgModule({
  imports: [EditProfileModule,
    StoreModule.forFeature('profileState', ProfileReducer),
  ],
  declarations: [],
  providers: [ProfileStore]
})
export class ProfileModule {}
