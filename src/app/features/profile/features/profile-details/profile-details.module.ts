import {NgModule} from "@angular/core";
import {ProfileDetailsComponent} from "./components/profile-details/profile-details.component";
import {CommonModule} from "@angular/common";
import {ProfileDetailsRoutingModule} from "./profile-details-routing.module";
import {UiLibraryModule} from "../../../../modules/ui-library";

@NgModule({
    declarations: [ProfileDetailsComponent],
    imports: [CommonModule, ProfileDetailsRoutingModule, UiLibraryModule]
})
export class ProfileDetailsModule {

}
