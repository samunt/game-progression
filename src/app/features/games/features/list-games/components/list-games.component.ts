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
    public src: string = null;

    @Input()
    public firstName: string = null;

    @Input()
    public lastName: string = null;

    @Input()
    public avgNumHrs: number = null;

    @Input()
    public fontFamily = 'sans-serif';

    @Input()
    public fontSize = '1rem';

    @Input()
    public fontWeight = 300;

    @Input()
    public bgColor = '#9dafbd';

    @Input()
    public bgColorSave = '#76b43f';

    @Input()
    public cardBgColor = '#30495f';

    @Input()
    public fontColor = '#30495f';

    @Input()
    public borderRadius = '5px';

    @Input()
    public width = '10rem';

    @Input()
    public height = '2rem';

    @Input()
    public cardWidth = '100%';

    @Input()
    public cardHeight = null;

    @Input()
    public cardPadding = '1rem';

    @Input()
    public cardMargin = '0 2rem';

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
        })
    }


    public addGame() {
        this.router.navigate(['/add-game'])
    }
}
