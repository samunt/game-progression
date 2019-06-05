import { Profile } from '../types/profile';

import { ProfileActions, ProfileActionsUnion } from './profile.actions';
import {createProfileState} from "../types/profile-state/profile-state.functions";
import {ProfileState} from "../types/profile-state";
import {HttpErrorResponse} from "@angular/common/http";

export function ProfileReducer(
    state: ProfileState = createProfileState(),
    action: ProfileActionsUnion
): Profile {
    switch (action.type) {
        case ProfileActions.RetrieveProfile:
            return {
                id: null,
                currentAccount: null,
                firstName: null,
                lastName: null,
                avatar: null,
                avgNumHrs: null,
                error: null
            };
        case ProfileActions.RetrieveProfileSuccess:
            return {
                currentAccount: true,
                firstName: action.profile.firstName,
                lastName: action.profile.lastName,
                avatar: action.profile.avatar,
                avgNumHrs: action.profile.avgNumHrs,
                error: null,
                id: action.profile.id
            };
        case ProfileActions.RetrieveProfileFailure:
            return {
                currentAccount: null,
                firstName: null,
                lastName: null,
                avatar: null,
                avgNumHrs: null,
                error: action.error,
                id: null
            };

        default:
            return {
                currentAccount: null,
                firstName: null,
                lastName: null,
                avatar: null,
                avgNumHrs: null,
                error: null,
                id: null
            };
    }
}
