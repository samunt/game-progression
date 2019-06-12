import {Component, EventEmitter, Input, Output} from '@angular/core';
import {DataService} from "../../../../../../services";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";

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

  @Input()
  public fontFamily = 'sans-serif';

  @Input()
  public fontSize = '1.5rem';

  @Input()
  public fontWeight = 300;

  @Input()
  public bgColor = '#9dafbd';

  @Input()
  public cardBgColor = '#30495f';

  @Input()
  public fontColor = '#30495f';

  @Input()
  public borderRadius = '5px';

  @Input()
  public width = '10rem';

  @Input()
  public height = '2rem';

  @Input()
  public cardWidth = '93%';

  @Input()
  public cardHeight = null;

  @Input()
  public cardPadding = '1rem';

  @Input()
  public cardMargin = '0 2rem';


  @Output()
  public pressed = new EventEmitter<boolean>();
  public clickedButton = false;

  constructor(public dataService: DataService, private router: Router) {
    this.subscription = this.dataService.getProfile().subscribe(profile => {
      this.profile = profile[0];
      this.src = this.profile.avatar;
      this.firstName = this.profile.firstName;
      this.lastName = this.profile.lastName;
      this.avgNumHrs = this.profile.avgNumHrs;
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
