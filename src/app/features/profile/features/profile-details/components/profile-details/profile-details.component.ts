import { Component, OnInit } from '@angular/core';
import {ProfileStore} from "../../../../store/profile.store";
import {DataService} from "../../../../../../services/DataService.service";

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss']
})
export class ProfileDetailsComponent implements OnInit{
  ngOnInit(): void {
    const users = DataService.getProfile();
    console.log(users);
    // users.
    // ProfileStore
  }

}
