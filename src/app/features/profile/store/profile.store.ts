import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppState } from 'src/app/types/app-state/app-state.interface';

@Injectable()
export class GameStore {
    constructor(private store: Store<AppState>) {}

    public getCurrentAccountFirstName(): Observable<FirstName[]> {
        return this.getCurrentAccount().pipe(map(state => state.firstName));
    }


    public getCurrentAccountLastName(): Observable<LastName[]> {
        return this.getCurrentAccount().pipe(map(state => state.lastName));
    }

    public retrieveAccount() {
        this.store.dispatch(new RetrieveAccount());
    }

    public openMainNavigation() {
        this.store.dispatch(new OpenMainNavigation());
    }

    public closeMainNavigation() {
        this.store.dispatch(new CloseMainNavigation());
    }
}
