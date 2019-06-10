import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {DataService} from "../../../services";
import {GameActions, RetrieveGamesFailure, RetrieveGamesSuccess} from "../../games/store/game.actions";
import {catchError, map, switchMap, tap} from "rxjs/operators";
import {of} from "rxjs";

@Injectable()
export class GameEffects {
    constructor(
        private actions$: Actions,
        private dataService: DataService
    ) {}

    @Effect()
    retrieveGames$ = this.actions$.pipe(
        // filter out the actions, except '[Retrieve Games] Get'
        ofType(GameActions.RetrieveGames),
        tap(console.log),
        switchMap(() =>
            //call service
            this.dataService.getProfile().pipe(
                // return a success action when everything goes well
                map(profile => new RetrieveGamesSuccess(profile.games[0])),
                // return a fail action when its FUBAR
                catchError(error => of(new RetrieveGamesFailure(error)))
            ),
        ),
    )
}
