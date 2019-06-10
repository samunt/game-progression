import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { Subscription} from "rxjs";
import {DataService} from "../../../services";

@Component({
  selector: 'app-navigation',
  templateUrl: './app-navigation.component.html',
  styleUrls: ['./app-navigation.component.scss']
})
export class AppNavigationComponent {
  subscription: Subscription;
  profile: any;

  @Input()
  public src: string = null;

  @Input()
  public firstName: string = null;

  @Input()
  public lastName: string = null;

  constructor(public dataService: DataService) {
      this.subscription = this.dataService.getProfile().subscribe(profile => {
          this.profile = profile;
          this.src = this.profile.avatar;
          this.firstName = this.profile.firstName;
          this.lastName = this.profile.lastName;
      })
  }

}
