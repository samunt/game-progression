import {Component, Input} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {GameStore} from "../../../../store/game.store";
import {Game} from "../../../../types/games";
import {Router} from "@angular/router";
@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.scss']
})
export class AddGameComponent  {
  public form: FormGroup;
  public game: Game;
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
  public cardMargin = '0 2rem';

  constructor(public store: GameStore, private router: Router) {
    this.form = new FormGroup({
      id: new FormControl(''),
      name: new FormControl(''),
      imageURL: new FormControl(''),
      platformName: new FormControl(''),
      numHrsComplete: new FormControl(''),
      priority: new FormControl(''),
      imgUrl: new FormControl('')
    });
    //generate unique game id
    let hash = Math.random().toString(36).substring(2) + (new Date()).getTime().toString(36);
    this.form['controls']['id'].setValue(hash);
  }

  submitForm(form: FormGroup) {
    form['controls']['numHrsComplete'].setValue(parseInt(form.controls.numHrsComplete.value));
    form['controls']['priority'].setValue(parseInt(form.controls.priority.value));

    let game: Game = {
      id: null,
      name: null,
      platform: null,
      platformName: null,
      hrsPlayed: null,
      numHrsComplete: null,
      compDate: null,
      imgUrl: null,
      priority: null
    };
    //get keys from form.control (which should match the Game type
    //iterate over game keys
    //map the form.control[key].value to the game with the same key
    let newGame = function(formController) {
      Object.keys(formController).forEach(e =>
          game[e] = formController[e].value
      );
    };

    newGame(form.controls);
    this.store.addGame(game);
    this.router.navigate(['/list-games']);
  }

  pressCancel() {
    this.router.navigate(['/list-games']);
  }
}
