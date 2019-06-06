import { ProfileActions, ProfileActionsUnion } from './profile.actions';
import {createProfileState} from "../types/profile-state";
import {ProfileState} from "../types/profile-state";

export function ProfileReducer(
    state: ProfileState = createProfileState(),
    action: ProfileActionsUnion
): ProfileState {
    switch (action.type) {
        case ProfileActions.RetrieveProfile:
            return {
                ...state,
                error: null
            };
        case ProfileActions.RetrieveProfileSuccess:
            return {
                ...state,
                profile: action.profile
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
