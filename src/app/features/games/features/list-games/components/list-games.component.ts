import {Component, Input} from "@angular/core";
import {DataService} from "../../../../../services";
import {Game} from "../../../types/games";
import * as _ from 'lodash';
import {Platform} from "../../../types/platforms";
import {GameStore} from "../../../store/game.store";
import {Router} from "@angular/router";

@Component({
    selector: 'app-list-games',
    templateUrl: 'list-games.component.html',
    styleUrls: ['list-games.component.scss']
})
export class ListGamesComponent {
    public gameList: any;
    public gameSubscription: any;
    public platformSubscription: any;
    public platformList: any;

    @Input()
    public color = 'navy';

    constructor(public dataService: DataService, public gameStore: GameStore, public router: Router) {
        this.platformSubscription = this.dataService.getPlatforms().subscribe(
            platforms => {
                this.platformList = platforms;
            }
        );
        this.gameSubscription = this.dataService.getGames().subscribe(gameList => {
            this.gameList = gameList;
            let platformList = this.platformList;
            _.forEach(this.gameList, function(game: Game){
                _.forEach(platformList, function(platform: Platform){
                    //grab platform that has an id that matches an id from the list of platforms in db
                    //return the string belonging to the platform list
                    if (game.platform === platform.id) {
                        game.platformName = platform.platform
                    }
                });
            });
            this.gameStore.updateGameListState(this.gameList);
            console.log('ALTERED LIST', this.gameList)

            // dispatch action to update list

        })
    }

    public addGame() {
        this.router.navigate(['/add-game'])
    }
}
