import { NgModule } from "@angular/core";
import { EditProfileModule } from "./edit-profile/edit-profile.module";
import {StoreModule} from "@ngrx/store";
import {ProfileReducer} from "../store/profile.reducer";

@NgModule({
  imports: [EditProfileModule,
    StoreModule.forFeature('profileState', ProfileReducer),
  ],
  declarations: [],
})
export class ProfileModule {}
