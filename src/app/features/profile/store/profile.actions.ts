import { HttpErrorResponse } from '@angular/common/http';
import { Action } from '@ngrx/store';
import { Profile } from '../types/profile';


export enum ProfileActions {
    RetrieveProfile = 'Profile-RetrieveProfile',
    RetrieveAccountSuccess = 'Profile-RetrieveAccountSuccess',
    RetrieveAccountFailure = 'Profile-RetrieveAccountFailure',
}

export class RetrieveProfile implements Action {
    public readonly type = ProfileActions.RetrieveProfile;
}

export class RetrieveProfileSuccess implements Action {
    public readonly type = ProfileActions.RetrieveAccountSuccess;

    constructor(public profile: Profile) {}
}

export class RetrieveProfileFailure implements Action {
    public readonly type = ProfileActions.RetrieveAccountFailure;

    constructor(public error: HttpErrorResponse) {}
}


export type ProfileActionsUnion =
    | RetrieveProfile
    | RetrieveProfileSuccess
    | RetrieveProfileFailure;
