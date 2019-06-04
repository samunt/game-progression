import { HttpErrorResponse } from '@angular/common/http';
import { Action } from '@ngrx/store';
import { Profile } from '../types/profile';


export enum ProfileActions {
    RetrieveAccount = 'Profile-RetrieveAccount',
    RetrieveAccountSuccess = 'Profile-RetrieveAccountSuccess',
    RetrieveAccountFailure = 'Profile-RetrieveAccountFailure',
}

export class RetrieveAccount implements Action {
    public readonly type = ProfileActions.RetrieveAccount;
}

export class RetrieveAccountSuccess implements Action {
    public readonly type = ProfileActions.RetrieveAccountSuccess;

    constructor(public profile: Profile) {}
}

export class RetrieveAccountFailure implements Action {
    public readonly type = ProfileActions.RetrieveAccountFailure;

    constructor(public error: HttpErrorResponse) {}
}


export type ProfileActionsUnion =
    | RetrieveAccount
    | RetrieveAccountSuccess
    | RetrieveAccountFailure;
