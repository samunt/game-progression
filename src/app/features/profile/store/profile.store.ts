import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppState } from 'src/app/components/app/components/app/types/app-state/app-state.interface';
import {Profile} from "../types/profile";

@Injectable()
export class ProfileStore {
    constructor(private store: Store<AppState>) {}

    public getProfileState(): Observable<Profile> {
        return this.store.pipe(map(state => state.id));
    }
}
