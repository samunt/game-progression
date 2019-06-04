import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { AppState } from 'src/app/components/app/components/app/types/app-state/app-state.interface';
import {Profile} from "../types/profile";

@Injectable()
export class ProfileStore {
    constructor(private store: Store<AppState>) {}

    public getSessionState(): Observable<Profile> {
        return this.store.pipe(map(state => state.id));
    }

    public getCurrentAccount(): Observable<Account> {
        return this.getSessionState().pipe(
            map(state => state),
            filter(Boolean)
        );
    }

    public getCurrentAccountFirstName(): Observable<Account> {
        return this.getCurrentAccount().pipe(map(state => state));
    }

    public getCurrentAccountLastName(): Observable<Account> {
        return this.getCurrentAccount().pipe(map(state => state));
    }

}
