import { updateEntityInArray } from 'src/app/components/app/components/app/store/store.utils';
import { createSessionState, SessionState } from '../types/game-state';

import { GameActions, GamesActionsUnion } from './games.actions';

export function gamesReducer(
    state: SessionState = createSessionState(),
    action: GamesActionsUnion
): SessionState {
    switch (action.type) {
        case GameActions.RetrieveAccount:
            return {
                ...state,
                error: null
            };
        case GameActions.RetrieveAccountSuccess:
            return {
                ...state,
                currentAccount: action.account
            };
        case GameActions.RetrieveAccountFailure:
            return {
                ...state,
                error: action.error
            };
        case GameActions.UpdateAccountFirstName:
            return {
                ...state,
                currentAccount: {
                    ...state.currentAccount,
                    phoneNumbers: updateEntityInArray(state.currentAccount.firstName, action.firstName)
                }
            };
        case GameActions.UpdateAccountLastName:
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
