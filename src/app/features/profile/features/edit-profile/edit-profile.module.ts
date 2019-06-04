import {NgModule} from "@angular/core";
import {EditProfileComponent} from "./components/edit-profile/edit-profile.component";
import {CommonModule} from "@angular/common";
import {EditProfileRoutingModule} from "./edit-profile-routing.module";

@NgModule({
    imports: [CommonModule, EditProfileRoutingModule],
    declarations: [EditProfileComponent]
})
export class EditProfileModule {}
