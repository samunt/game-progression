import { HttpErrorResponse } from '@angular/common/http';
import { Action } from '@ngrx/store';
import { Game } from '../types/games';
import {FormGroup} from "@angular/forms";
import {ProfileActions} from "../../profile/store/profile.actions";


export enum GameActions {
    RetrieveGames = 'Games-RetrieveGames',
    RetrieveGamesSuccess = 'Games-RetrieveGamesSuccess',
    RetrieveGamesFailure = 'Games-RetrieveGamesFailure'
}

export class RetrieveGames implements Action {
    public readonly type = GameActions.RetrieveGames;
}

export class RetrieveGamesSuccess implements Action {
    public readonly type = GameActions.RetrieveGamesSuccess;

    constructor(public gameList: Game) {}
}

export class RetrieveGamesFailure implements Action {
    public readonly type = GameActions.RetrieveGamesFailure;

    constructor(public error: HttpErrorResponse) {}
}

export type GamesActionsUnion =
    | RetrieveGames
    | RetrieveGamesSuccess
    | RetrieveGamesFailure;
