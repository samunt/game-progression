import {NgModule} from "@angular/core";
import {AppNavigationComponent} from "./components/app-navigation.component";
import {UiLibraryModule} from "../../../../modules/ui-library";

@NgModule({
   imports: [UiLibraryModule],
   declarations: [AppNavigationComponent]
})
export class AppNavigationModule {}
