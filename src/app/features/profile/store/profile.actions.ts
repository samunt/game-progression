import { HttpErrorResponse } from '@angular/common/http';
import { Action } from '@ngrx/store';
import { Profile } from '../types/profile';


export enum ProfileActions {
    RetrieveAccount = 'Profile-RetrieveAccount',
    RetrieveAccountSuccess = 'Profile-RetrieveAccountSuccess',
    RetrieveAccountFailure = 'Profile-RetrieveAccountFailure',
    UpdateAccountFirstName = 'Profile-UpdateAccountFirstName',
    UpdateAccountLastName = 'Profile-UpdateAccountLastName'
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

export class UpdateAccountFirstName implements Action {
    public readonly type = ProfileActions.UpdateAccountFirstName;

    constructor(public firstName: FirstName) {}
}

export class UpdateAccountLastName implements Action {
    public readonly type = ProfileActions.UpdateAccountLastName;

    constructor(public lastName: LastName) {}
}


export type ProfileActionsUnion =
    | RetrieveAccount
    | RetrieveAccountSuccess
    | RetrieveAccountFailure
    | UpdateAccountFirstName
    | UpdateAccountLastName;
