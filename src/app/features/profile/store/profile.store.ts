import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/types/app-state/app-state.interface';
import {EditProfile, RetrieveProfile} from "./profile.actions";
import {FormGroup} from "@angular/forms";
import {Profile} from "../types/profile";

@Injectable()
export class ProfileStore {
    constructor(private store: Store<AppState>) {}

    public getProfileState(): void {
        return this.store.dispatch(new RetrieveProfile() )
    }

    public editProfileState(profile: Profile): void {
        return this.store.dispatch(new EditProfile(profile))
    }
}
