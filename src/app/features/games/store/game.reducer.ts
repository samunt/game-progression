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

        case GameActions.UpdateGameList:
            return {
                ...state,
                error: null
            };
        case GameActions.UpdateGameListSuccess:
            return {
                ...state,
                game: action.gameList[0]
            };
        case GameActions.UpdateGameListFailure:
            return {
                ...state,
                error: action.error
            };
        case GameActions.AddGame:
            return {
                ...state,
                error: null
            };
        case GameActions.AddGameSuccess:
            return {
                ...state,
                game: action.game
            };
        case GameActions.AddGameFailure:
            return {
                ...state,
                error: action.error
            };
        default:
            return state;
    }
}
