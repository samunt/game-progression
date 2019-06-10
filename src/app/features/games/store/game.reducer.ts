import {GameActions, GamesActionsUnion} from './game.actions';
import {createGameState, GameState} from "../types/game-state";

export function GameReducer(
    state: GameState = createGameState(),
    action: GamesActionsUnion
): GameState {
    switch (action.type) {
        case GameActions.RetrieveGames:
            return {
                ...state,
                error: null
            };
        case GameActions.RetrieveGamesSuccess:
            return {
                ...state,
                game: action.gameList
            };
        case GameActions.RetrieveGamesFailure:
            return {
                ...state,
                error: action.error
            };

        // case GameActions.EditGame:
        //     return {
        //         ...state,
        //         error: null
        //     };
        // case GameActions.EditGameSuccess:
        //     return {
        //         error: undefined, isLoading: false,
        //         ...state,
        //         Game: action.Game
        //     };
        // case GameActions.EditGameFailure:
        //     return {
        //         ...state,
        //         error: action.error
        //     };
        default:
            return state;
    }
}
