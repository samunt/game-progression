import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/components/app/components/app/types/app-state/app-state.interface';
import {RetrieveProfile} from "./profile.actions";

@Injectable()
export class ProfileStore {
    constructor(private store: Store<AppState>) {}

    public getProfileState(): void {
        return this.store.dispatch(new RetrieveProfile() )
    }
}
