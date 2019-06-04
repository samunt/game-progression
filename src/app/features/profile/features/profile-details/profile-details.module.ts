import {NgModule} from "@angular/core";
import {ProfileDetailsComponent} from "./components/profile-details/profile-details.component";
import {CommonModule} from "@angular/common";
import {ProfileDetailsRoutingModule} from "./profile-details-routing.module";

@NgModule({
    declarations: [ProfileDetailsComponent],
    imports: [CommonModule, ProfileDetailsRoutingModule]
})
export class ProfileDetailsModule {

}
