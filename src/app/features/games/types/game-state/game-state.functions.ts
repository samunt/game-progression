import { createDefaultLoadableState } from "../../../../types/loadable";
import { GameState } from "./game-state.interface";
import {Game} from "../games";

export function createGameState(): GameState {
    return {
        ...createDefaultLoadableState(),
        game: null
    };
}
