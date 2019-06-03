import { NgModule } from "@angular/core";
import { ProfileDetailsModule } from "./profile-details/components/profile-details.module";
import { EditProfileModule } from "./edit-profile/edit-profile.module";

@NgModule({
  imports: [ProfileDetailsModule, EditProfileModule],
  declarations: [],
})
export class ProfileModule {}
