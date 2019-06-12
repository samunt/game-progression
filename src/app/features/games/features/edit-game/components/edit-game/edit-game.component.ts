import {Component, OnInit} from '@angular/core';
import {GameStore} from "../../../../store/game.store";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {Subscription} from "rxjs";
import {DataService} from "../../../../../../services";
import * as _ from 'lodash';
import {Game} from "../../../../types/games";

@Component({
  selector: 'app-edit-game',
  templateUrl: './edit-game.component.html',
  styleUrls: ['./edit-game.component.scss']
})
export class EditGameComponent implements OnInit {
  private form: FormGroup;
  private sub: Subscription;
  private gameSubscription: Subscription;
  public game: Game;

  constructor(public store: GameStore, private router: Router, private route: ActivatedRoute, public dataService: DataService) {

  }

  ngOnInit(): void {
    //get params id
    let gameToEdit;
    this.sub = this.route.params.subscribe(params => {
      const gameId = params['id'];
      console.log('paramID', gameId)
      this.gameSubscription = this.dataService.getGames().subscribe(gameList => {
        //filter out irrelevant games
        gameToEdit = _.filter(gameList, function(o) {
          return o.id === gameId;
        });
        gameToEdit = gameToEdit[0];
        this.game = gameToEdit;
        //apply values of game to form
        this.form = new FormGroup({
          id: new FormControl(gameId),
          name: new FormControl(this.game.name),
          imageURL: new FormControl(this.game.imgUrl),
          platform: new FormControl(this.game.platformName),
          numHrsComplete: new FormControl(this.game.estCompleted),
          priority: new FormControl(this.game.priority)
        });
      });
    });
  }


  submitForm(form: FormGroup) {
    console.log(form)
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
    let editedGame = function(formController) {
      Object.keys(formController).forEach(e =>
          game[e] = formController[e].value
      );
    };

    editedGame(form.controls)
    //dispatch action to update game
    this.store.updateGame(game);
  }
}
