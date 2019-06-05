import { Injectable } from '@angular/core';
import { ofType, Actions, Effect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, filter, map, mergeMap } from 'rxjs/operators';
import {ProfileActions, RetrieveProfile, RetrieveProfileFailure, RetrieveProfileSuccess} from "./profile.actions";
import {DataService} from "../../../services";

@Injectable()
export class ProfileEffects {
    constructor(
        private actions$: Actions,
        private dataService: DataService
    ) {}

    @Effect()
    private retrieveProfile$ = this.actions$.pipe(
        ofType(ProfileActions.RetrieveProfile),
        mergeMap(() =>
            this.dataService.getProfile().pipe(
                map(profile => new RetrieveProfileSuccess(profile)),
                catchError(error => of(new RetrieveProfileFailure(error)))
            )
        )
    );
}
