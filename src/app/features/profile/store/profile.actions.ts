import { HttpErrorResponse } from '@angular/common/http';
import { Action } from '@ngrx/store';
import { Profile } from '../types/profile';
import {FormGroup} from "@angular/forms";


export enum ProfileActions {
    RetrieveProfile = 'Profile-RetrieveProfile',
    RetrieveProfileSuccess = 'Profile-RetrieveAccountSuccess',
    RetrieveProfileFailure = 'Profile-RetrieveAccountFailure',
    EditProfile = 'Profile-EditProfile',
    EditProfileSuccess = 'Profile-EditProfileSuccess',
    EditProfileFailure = 'Profile-EditProfileFailure'
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

export class EditProfile implements Action {
    public readonly type = ProfileActions.EditProfile;

    constructor(public profile: Profile) {}
}

export class EditProfileSuccess implements  Action {
    public readonly type = ProfileActions.EditProfileSuccess;

    constructor(public profile: Profile) {}
}

export class EditProfileFailure implements  Action {
    public readonly type = ProfileActions.EditProfileFailure;

    constructor(public error: HttpErrorResponse) {}
}

export type ProfileActionsUnion =
    | RetrieveProfile
    | RetrieveProfileSuccess
    | RetrieveProfileFailure
    | EditProfile
    | EditProfileSuccess
    | EditProfileFailure;
