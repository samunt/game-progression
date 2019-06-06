import { Injectable } from '@angular/core';
import { ofType, Actions, Effect } from '@ngrx/effects';
import { of } from 'rxjs';
import {catchError, map, mergeMap, switchMap} from 'rxjs/operators';
import {ProfileActions, RetrieveProfileFailure, RetrieveProfileSuccess} from "./profile.actions";
import {DataService} from "../../../services";

@Injectable()
export class ProfileEffects {
    constructor(
        private actions$: Actions,
        private dataService: DataService
    ) {}
    @Effect()
    retrieveProfile$ = this.actions$.pipe(
        // filter out the actions, except '[Retrieve Profile] Get'
        ofType(ProfileActions.RetrieveProfile),
        switchMap(() =>
            //call service
            this.dataService.getProfile().pipe(
                // return a success action when everything goes well
                map(profile => new RetrieveProfileSuccess(profile)),
                // return a fail action when its FUBAR
                catchError(error => of(new RetrieveProfileFailure(error)))
            ),
        ),
    );
}
