import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {DataService} from "../../../../../../services";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
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
  public clickedButton = true;

  @Output()
  public sent = new EventEmitter<FormGroup>();

  constructor(public dataService: DataService, private router: Router, private store: ProfileStore) {

    this.subscription = this.dataService.getProfile().subscribe(profile => {
      this.profile = profile;
      this.form = new FormGroup({
        firstName: new FormControl(this.profile.firstName),
        lastName: new FormControl(this.profile.lastName),
        avatar: new FormControl(this.profile.avatar),
        avgNumHrs: new FormControl(this.profile.avgNumHrs)
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


  public submitForm(form: FormGroup) {
    this.form = form;
    this.profile.avatar = this.form.controls.avatar.value;
    this.profile.firstName = this.form.controls.firstName.value;
    this.profile.lastName = this.form.controls.lastName.value;
    this.profile.avgNumHrs = this.form.controls.avgNumHrs.value;
    this.store.editProfileState(this.profile)
  }
}
