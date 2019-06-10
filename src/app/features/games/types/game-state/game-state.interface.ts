import { Loadable} from "../../../../types/loadable";
import {Game} from "../games";

export interface GameState extends Loadable {
    game: Game;
}
