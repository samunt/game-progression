import { Profile } from '../types/profile';

import { ProfileActions, ProfileActionsUnion } from './profile.actions';
import {createProfileState} from "../types/profile-state/profile-state.functions";

export function ProfileReducer(
    state: Profile = createProfileState(),
    action: ProfileActionsUnion
): Profile {
    switch (action.type) {
        case ProfileActions.RetrieveProfile:
            return {
                ...state
            };
        case ProfileActions.RetrieveProfileSuccess:
            return {
                ...state,
                id: action.profile.id
            };
        case ProfileActions.RetrieveProfileFailure:
            return {
                ...state,
                error: action.error
            };

        default:
            return state;
    }
}
