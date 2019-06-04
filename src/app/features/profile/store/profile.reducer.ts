import { updateEntityInArray } from 'src/app/components/app/components/app/store/store.utils';
import { createSessionState, SessionState } from '../types/Profile-state';

import { ProfileActions, ProfilesActionsUnion } from './Profiles.actions';

export function ProfileReducer(
    state: SessionState = createSessionState(),
    action: ProfilesActionsUnion
): SessionState {
    switch (action.type) {
        case ProfileActions.RetrieveAccount:
            return {
                ...state,
                error: null
            };
        case ProfileActions.RetrieveAccountSuccess:
            return {
                ...state,
                currentAccount: action.account
            };
        case ProfileActions.RetrieveAccountFailure:
            return {
                ...state,
                error: action.error
            };
        case ProfileActions.UpdateAccountFirstName:
            return {
                ...state,
                currentAccount: {
                    ...state.currentAccount,
                    phoneNumbers: updateEntityInArray(state.currentAccount.firstName, action.firstName)
                }
            };
        case ProfileActions.UpdateAccountLastName:
            return {
                ...state,
                currentAccount: {
                    ...state.currentAccount,
                    phoneNumbers: updateEntityInArray(state.currentAccount.lastName, action.lastName)
                }
            };

        default:
            return state;
    }
}
