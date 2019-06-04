import { updateEntityInArray } from 'src/app/components/app/components/app/store/store.utils';
import { Profile } from '../types/profile';

import { ProfileActions, ProfileActionsUnion } from './profile.actions';

export function ProfileReducer(
    state: Profile,
    action: ProfileActionsUnion
): Profile {
    switch (action.type) {
        case ProfileActions.RetrieveAccount:
            return {
                ...state,
                error: null
            };
        case ProfileActions.RetrieveAccountSuccess:
            return {
                ...state,
                currentAccount: action
            };
        case ProfileActions.RetrieveAccountFailure:
            return {
                ...state,
                error: action.error
            };

        default:
            return state;
    }
}
