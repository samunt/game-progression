import {Component, OnChanges, OnInit} from '@angular/core';
import {ProfileStore} from "../../../../store/profile.store";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss']
})
export class ProfileDetailsComponent implements OnInit{
  constructor(public http: HttpClient, public profileStore: ProfileStore){}
  ngOnInit(): void {
    let users = this.profileStore.getProfileState();
    console.log('users', users);
  }

}
