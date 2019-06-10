import {NgModule} from "@angular/core";
import {EditProfileComponent} from "./components/edit-profile/edit-profile.component";
import {CommonModule} from "@angular/common";
import {EditProfileRoutingModule} from "./edit-profile-routing.module";
import {UiLibraryModule} from "../../../../modules/ui-library";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
    imports: [CommonModule, EditProfileRoutingModule, UiLibraryModule, ReactiveFormsModule],
    declarations: [EditProfileComponent]
})
export class EditProfileModule {}
