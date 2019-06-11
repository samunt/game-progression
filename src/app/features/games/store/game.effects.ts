import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {DataService} from "../../../services";
import {
    AddGameFailure,
    AddGameSuccess,
    GameActions,
    RetrieveGamesFailure,
    RetrieveGamesSuccess, UpdateGameListFailure,
    UpdateGameListSuccess
} from "../../games/store/game.actions";
import {catchError, map, switchMap, tap} from "rxjs/operators";
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
            this.dataService.getProfile().pipe(
                // return a success action when everything goes well
                map(profile => new RetrieveGamesSuccess(profile.games[0])),
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

    // @Effect()
    // editGameList = this.actions$.pipe(
    //     ofType(GameActions.UpdateGameList),
    //     tap(console.log),
    //     switchMap((action) =>
    //         this.dataService.updateProfile(action.gameList).pipe(
    //             map( gameList => new UpdateGameListSuccess(gameList[0].games)),
    //             catchError( error => of(new UpdateGameListFailure(error)))
    //         ),
    //     ),
    // );
}
