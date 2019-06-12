import { HttpErrorResponse } from '@angular/common/http';
import { Action } from '@ngrx/store';
import { Game } from '../types/games';
import {FormGroup} from "@angular/forms";
import {ProfileActions} from "../../profile/store/profile.actions";


export enum GameActions {
    RetrieveGames = 'Games-RetrieveGames',
    RetrieveGamesSuccess = 'Games-RetrieveGamesSuccess',
    RetrieveGamesFailure = 'Games-RetrieveGamesFailure',
    UpdateGameList = 'Games-UpdateGameList',
    UpdateGameListSuccess = 'Games-UpdateGameListSuccess',
    UpdateGameListFailure = 'Games-UpdateGameListFailure',
    AddGame = 'Game-AddGame',
    AddGameSuccess = 'Game-AddGameSuccess',
    AddGameFailure = 'Game-AddGameFailure',
    UpdateGame = 'Game-UpdateGame',
    UpdateGameSuccess = 'Game-UpdateGameSuccess',
    UpdateGameFailure = 'Game-UpdateGameFailure'
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

export class UpdateGameList implements Action {
    public readonly type = GameActions.UpdateGameList;

    constructor(public gameList: Array<Game>) {}
}

export class UpdateGameListSuccess {
    public readonly type = GameActions.UpdateGameListSuccess;

    constructor(public gameList: Array<Game>) {}
}

export class UpdateGameListFailure {
    public readonly type = GameActions.UpdateGameListFailure;

    constructor(public error: HttpErrorResponse) {}
}

export class AddGame {
    public readonly type = GameActions.AddGame;

    constructor(public game: Game) {}
}

export class AddGameSuccess {
    public readonly type = GameActions.AddGameSuccess;

    constructor(public game: Game) {}
}

export class AddGameFailure {
    public readonly type = GameActions.AddGameFailure;

    constructor(public error: HttpErrorResponse) {}
}

export class UpdateGame {
    public readonly type = GameActions.UpdateGame;

    constructor(public game: Game) {}
}

export class UpdateGameSuccess {
    public readonly type = GameActions.UpdateGameSuccess;

    constructor(public game: Game) {}
}

export class UpdateGameFailure {
    public readonly type = GameActions.UpdateGameFailure;

    constructor(public error: HttpErrorResponse) {}
}

export type GamesActionsUnion =
    | RetrieveGames
    | RetrieveGamesSuccess
    | RetrieveGamesFailure
    | UpdateGameList
    | UpdateGameListSuccess
    | UpdateGameListFailure
    | AddGame
    | AddGameSuccess
    | AddGameFailure
    | UpdateGame
    | UpdateGameSuccess
    | UpdateGameFailure
    ;
