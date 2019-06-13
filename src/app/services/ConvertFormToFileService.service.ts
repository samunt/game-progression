import {Injectable} from "@angular/core";
import {Game} from "../features/games/types/games";

@Injectable()
export class ConvertFormToFileServiceService {
    public gameToModify: Game = {
        id: null,
        name: null,
        platform: null,
        platformName: null,
        estCompleted: null,
        imgUrl: null,
        priority: null,
        compDate: null
    };
    public convertFormToGameType(formControlsFromRef) {
        console.log('===>',formControlsFromRef)
        Object.keys(formControlsFromRef).forEach(e =>
            this.gameToModify[e] = formControlsFromRef[e].value
        );
        return this.gameToModify;
    };
}
