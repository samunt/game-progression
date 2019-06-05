import { Profile } from '../types/profile';

import { ProfileActions, ProfileActionsUnion } from './profile.actions';

export function ProfileReducer(
    state: Profile,
    action: ProfileActionsUnion
): Profile {
    switch (action.type) {
        case ProfileActions.RetrieveProfile:
            return {
                ...state
            };
        case ProfileActions.RetrieveAccountSuccess:
            return {
                ...state,
                id: state.id
            };
        case ProfileActions.RetrieveAccountFailure:
            return {
                ...state
            };

        default:
            return state;
    }
}
