import { Injectable } from '@angular/core';
import { ofType, Actions, Effect } from '@ngrx/effects';
import { of } from 'rxjs';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {EditProfileSuccess, ProfileActions, RetrieveProfileFailure, RetrieveProfileSuccess, EditProfileFailure} from "./profile.actions";
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
        tap(console.log),
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

    @Effect()
    editProfile = this.actions$.pipe(
        ofType(ProfileActions.EditProfile),
        tap(console.log),
        switchMap(() =>
            this.dataService.updateProfile('lorem').pipe(
                map( profile => new EditProfileSuccess(profile)),
                catchError( error => of(new EditProfileFailure(error)))
            ),
        ),
    );


}
