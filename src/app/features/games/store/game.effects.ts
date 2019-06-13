import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {DataService} from "../../../services";
import {
    AddGameFailure,
    AddGameSuccess, DeleteGameFailure, DeleteGameSuccess,
    GameActions,
    RetrieveGamesFailure,
    RetrieveGamesSuccess, UpdateGameFailure, UpdateGameListFailure,
    UpdateGameListSuccess, UpdateGameSuccess
} from "../../games/store/game.actions";
import {catchError, map, mergeMap, switchMap, tap} from "rxjs/operators";
import {of} from "rxjs";
import {EditProfileFailure, EditProfileSuccess, ProfileActions} from "../../profile/store/profile.actions";

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
            this.dataService.getGames().pipe(
                // return a success action when everything goes well
                map(games => new RetrieveGamesSuccess(games)),
                // return a fail action when its FUBAR
                catchError(error => of(new RetrieveGamesFailure(error)))
            ),
        ),
    );

    @Effect()
    addGame = this.actions$.pipe(
        ofType(GameActions.AddGame),
        tap(console.log),
        switchMap((action) =>
            this.dataService.addGame(action.game).pipe(
                map( game => new AddGameSuccess(game)),
                catchError( error => of(new AddGameFailure(error)))
            ),
        ),
    );

    @Effect()
    updateGame = this.actions$.pipe(
        ofType(GameActions.UpdateGame),
        tap(console.log),
        switchMap((action) =>
            this.dataService.updateGame(action.game).pipe(
                map(game => new UpdateGameSuccess(game)),
                catchError( error => of(new UpdateGameFailure(error)))
            ),
        ),
    );

    @Effect()
    deleteGame = this.actions$.pipe(
        ofType(GameActions.DeleteGame),
        tap(console.log),
        mergeMap((action) =>
            this.dataService.deleteGame(action).pipe(
                map(() => new DeleteGameSuccess()),
                catchError(error => of(new DeleteGameFailure(error)))
            ),
        ),
    );
}
