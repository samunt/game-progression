import {Component, Input, OnInit} from '@angular/core';
import {GameStore} from "../../../../store/game.store";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Subscription} from "rxjs";
import {DataService} from "../../../../../../services";
import * as _ from 'lodash';
import {Game} from "../../../../types/games";
import {Platform} from "../../../../types/platforms";
import {ConvertFormToFileServiceService} from "src/app/services/ConvertFormToFileService.service";

@Component({
  selector: 'app-edit-game',
  templateUrl: './edit-game.component.html',
  styleUrls: ['./edit-game.component.scss'],
  providers: [ConvertFormToFileServiceService]
})
export class EditGameComponent implements OnInit {
  private form: FormGroup;
  private sub: Subscription;
  private gameSubscription: Subscription;
  public game: Game;
  private platformSubscription: Subscription;
  private platformList: Platform;
  private convertedGame: Game;
  private hoursPattern = "^[1-9][0-9]*$";
  public submitted = false;
  private completed: boolean;

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
  public bgColorDel = '#b43f3f';

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
  public fontColorWhite = 'white';

  @Input()
  public borderRadius = '5px';

  @Input()
  public width = '10rem';

  @Input()
  public height = '2rem';

  @Input()
  public cardWidth = '93%';

  @Input()
  public cardHeight = null;

  @Input()
  public cardPadding = '1rem';

  @Input()
  public position = 'relative';

  @Input()
  public top = '2rem';

  @Input()
  public cardMargin = '0 2rem';


  constructor(public store: GameStore,
              private router: Router,
              private route: ActivatedRoute,
              private nav: Router,
              public dataService: DataService,
              public convertForm: ConvertFormToFileServiceService) {
    this.platformSubscription = this.dataService.getPlatforms().subscribe(
        platforms => {
          this.platformList = platforms;
        }
    );
  }

  ngOnInit(): void {
    //get params id
    let gameToEdit;
    this.sub = this.route.params.subscribe(params => {
      const gameId = params['id'];
      this.gameSubscription = this.dataService.getGames().subscribe(gameList => {
        //filter out irrelevant games
        gameToEdit = _.filter(gameList, function(o) {
          return o.id === gameId;
        });
        gameToEdit = gameToEdit[0];
        this.game = gameToEdit;
        console.log('GAME****', this.game);
        //apply values of game to form
        // @ts-ignore
        // @ts-ignore
        this.completed = false;
        this.form = new FormGroup({
          id: new FormControl({value: gameId, disabled: true}),
          name: new FormControl(this.game.name, Validators.compose([Validators.required])),
          imageURL: new FormControl(this.game.imgUrl, Validators.compose([Validators.required])),
          platformName: new FormControl(this.game.platformName, Validators.compose([Validators.required])),
          hrsPlayed: new FormControl(this.game.hrsPlayed, Validators.compose([Validators.required, Validators.pattern(this.hoursPattern)])),
          numHrsComplete: new FormControl(this.game.numHrsComplete ? this.game.numHrsComplete : 0, Validators.compose([Validators.required, Validators.pattern(this.hoursPattern)])),
          priority: new FormControl(this.game.priority, Validators.compose([Validators.required, Validators.pattern(this.hoursPattern)])),
          complete: new FormControl(this.completed)
        });
      });
    });
  }

  get f() { return this.form.controls; }
  submitForm(form: FormGroup) {
    this.submitted = true;
    let platformId: number = null;
    let platformList = this.platformList;
    //get keys from form.control (which should now match the Game type)

    this.convertedGame = this.convertForm.convertFormToGameType(form.controls);
    let game = this.convertedGame;
    //iterate over game keys
    //TODO REMOVE BELOW
    _.forEach(platformList, function(platform){
      platformId = game.platformName.toUpperCase() === platform.platform.toUpperCase() ? platform.id : false;
      game.platform = platformId
    });
    //dispatch action to update game
    this.store.updateGame(this.convertedGame);
    this.nav.navigate(['/list-games']);
  }

  deleteForm(form: FormGroup) {
    this.store.deleteGame(form.controls.id.value);
    this.nav.navigate(['/list-games']);
  }

  pressCancel() {
    this.nav.navigate(['/list-games']);
  }
}
