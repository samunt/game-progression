import {Injectable} from "@angular/core";
import {Game} from "../features/games/types/games";

@Injectable()
export class ConvertFormToFileServiceService {
    public gameToModify: Game = {
        id: null,
        name: null,
        platform: null,
        platformName: null,
        numHrsComplete: null,
        imgUrl: null,
        priority: null,
        hrsPlayed: null,
        compDate: null
    };
    public convertFormToGameType(formControlsFromRef) {
        Object.keys(formControlsFromRef).forEach(e =>
            this.gameToModify[e] = formControlsFromRef[e].value
        );
        return this.gameToModify;
    };
}
