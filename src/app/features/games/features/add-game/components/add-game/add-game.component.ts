import { Component} from '@angular/core';
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

  constructor(public store: GameStore, private router: Router) {
    this.form = new FormGroup({
      id: new FormControl(''),
      name: new FormControl(''),
      imageURL: new FormControl(''),
      platform: new FormControl(''),
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
      estCompleted: null,
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
}
