import {Component, Input} from "@angular/core";
import {DataService} from "../../../../../services";
import {Game} from "../../../types/games";
import * as _ from 'lodash';

@Component({
    selector: 'app-list-games',
    templateUrl: 'list-games.component.html',
    styleUrls: ['list-games.component.scss']
})
export class ListGamesComponent {
    public gameList: any;
    public subscription: any;

    @Input()
    public color = 'navy';

    constructor(public dataService: DataService) {
        this.subscription = this.dataService.getProfile().subscribe(gameList => {
            this.gameList = gameList[0].games;
            _.forEach(this.gameList, function(game){
                _.filter(game, function(o) { return !o.active; });
            })
            console.log(this.gameList)
        })
    }
}
