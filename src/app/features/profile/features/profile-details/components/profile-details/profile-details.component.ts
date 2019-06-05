import {Component, OnChanges, OnInit} from '@angular/core';
import {ProfileStore} from "../../../../store/profile.store";
import {DataService} from 'src/app/services/DataService.service';
import {Observable} from "rxjs";
import {Profile} from "../../../../types/profile/profile.interface";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss']
})
export class ProfileDetailsComponent implements OnInit{
  constructor(public dataService: DataService){}
  ngOnInit(): void {
    let users = this.dataService.getProfile();
    console.log('FIRED', users);
  }

}
