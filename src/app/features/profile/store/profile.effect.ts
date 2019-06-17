import { Injectable } from '@angular/core';
import { ofType, Actions, Effect } from '@ngrx/effects';
import { of } from 'rxjs';
import {catchError, map, switchMap, tap, withLatestFrom} from 'rxjs/operators';
import {
    EditProfileSuccess,
    ProfileActions,
    RetrieveProfileFailure,
    RetrieveProfileSuccess,
    EditProfileFailure,
} from "./profile.actions";
import {DataService} from "../../../services";
import {Router} from "@angular/router";

@Injectable()
export class ProfileEffects {
    constructor(
        private actions$: Actions,
        private dataService: DataService,
        private router: Router
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
        switchMap((action) =>
            this.dataService.updateProfile(action.profile).pipe(
                map( profile => new EditProfileSuccess(profile)),
                catchError( error => of(new EditProfileFailure(error)))
            ),
        ),
    );

}
