import { HttpErrorResponse } from '@angular/common/http';
import { Action } from '@ngrx/store';
import { Profile } from '../types/profile';


export enum ProfileActions {
    RetrieveProfile = 'Profile-RetrieveProfile',
    RetrieveProfileSuccess = 'Profile-RetrieveAccountSuccess',
    RetrieveProfileFailure = 'Profile-RetrieveAccountFailure',
}

export class RetrieveProfile implements Action {
    public readonly type = ProfileActions.RetrieveProfile;
}

export class RetrieveProfileSuccess implements Action {
    public readonly type = ProfileActions.RetrieveProfileSuccess;

    constructor(public profile: Profile) {}
}

export class RetrieveProfileFailure implements Action {
    public readonly type = ProfileActions.RetrieveProfileFailure;

    constructor(public error: HttpErrorResponse) {}
}


export type ProfileActionsUnion =
    | RetrieveProfile
    | RetrieveProfileSuccess
    | RetrieveProfileFailure;
