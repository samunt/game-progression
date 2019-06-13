import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/types/app-state/app-state.interface';
import {AddGame, DeleteGame, RetrieveGames, UpdateGame, UpdateGameList} from "./game.actions";
import {Game} from "../types/games";



@Injectable()
export class GameStore {
    constructor(private store: Store<AppState>) {}

    public getGameState(): void {
        return this.store.dispatch(new RetrieveGames() )
    }

    public updateGameListState(gameList: Array<Game>): void {
        return this.store.dispatch(new UpdateGameList(gameList))
    }

    public addGame(game: Game): void {
        return this.store.dispatch(new AddGame(game))
    }

    public updateGame(game: Game): void {
        return this.store.dispatch((new UpdateGame(game)))
    }

    public deleteGame(id): void {
        return this.store.dispatch((new DeleteGame(id)))
    }
}
