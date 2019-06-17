import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {DataService} from "../../../../../../services";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { ProfileStore } from "../../../../store/profile.store";
import {Profile} from "../../../../types/profile";

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent {
  subscription: Subscription;
  public form: FormGroup;
  public profile: Profile;
  private namePattern = "^[a-zA-Z]{1,25}$";
  private hoursPattern = "^[0-9]{1,5}$";
  public submitted = false;
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
  public fontSize = '1rem';

  @Input()
  public fontWeight = 300;

  @Input()
  public bgColor = '#9dafbd';

  @Input()
  public bgColorSave = '#76b43f';

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
  public clickedButton = true;

  @Output()
  public sent = new EventEmitter<FormGroup>();

  constructor(public dataService: DataService, private router: Router, private store: ProfileStore) {

    this.subscription = this.dataService.getProfile().subscribe(profile => {
      this.profile = profile[0];
      this.form = new FormGroup({
        id: new FormControl(this.profile.id),
        firstName: new FormControl(this.profile.firstName, Validators.compose(
            [Validators.pattern(this.namePattern), Validators.required])),
        lastName: new FormControl(this.profile.lastName, Validators.compose(
            [Validators.pattern(this.namePattern), Validators.required])),
        avatar: new FormControl(this.profile.avatar, Validators.required),
        avgNumHrs: new FormControl(this.profile.avgNumHrs,  Validators.compose(
            [Validators.required, Validators.pattern(this.hoursPattern),  Validators.required]))
      });
    });

  }

  press() {
    this.clickedButton = this.clickedButton !== true;
    this.pressed.emit(this.clickedButton);
    console.log(this.clickedButton, event);
    if (this.clickedButton === false) {
      this.router.navigate(['/profile-details']);
    }
  }

  get f() { return this.form.controls; }
  public submitForm(form: FormGroup) {
    this.submitted = true;
    // stop here if form is invalid
    if (form.invalid) {
      return;
    }
    this.form = form;
    this.profile.avatar = this.form.controls.avatar.value;
    this.profile.firstName = this.form.controls.firstName.value;
    this.profile.lastName = this.form.controls.lastName.value;
    this.profile.avgNumHrs = this.form.controls.avgNumHrs.value;
    this.store.editProfileState(this.profile);
  }
}
