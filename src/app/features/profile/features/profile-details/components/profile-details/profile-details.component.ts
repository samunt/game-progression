import {Component, EventEmitter, Input, Output} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DataService} from "../../../../../../services";
import {Subscription} from "rxjs";
import {Router, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss']
})
export class ProfileDetailsComponent{
  subscription: Subscription;
  profile: any;
  @Input()
  public src: string = null;

  @Input()
  public firstName: string = null;

  @Input()
  public lastName: string = null;

  @Input()
  public avgNumHrs: number = null;

  @Output()
  public pressed = new EventEmitter<boolean>();
  public clickedButton = false;

  constructor(public dataService: DataService, private router: Router) {
    this.subscription = this.dataService.getProfile().subscribe(profile => {
      this.profile = profile;
      this.src = this.profile.avatar;
      this.firstName = this.profile.firstName;
      this.lastName = this.profile.lastName;
      this.avgNumHrs = this.profile.avgNumHrs;
      console.log(this.profile)
    })
  }

  press() {
    this.clickedButton = this.clickedButton !== true;
    this.pressed.emit(this.clickedButton);
    if (this.clickedButton === true) {
      this.router.navigate(['/edit-profile']);
    }
  }

}
