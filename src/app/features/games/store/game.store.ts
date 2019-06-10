import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/types/app-state/app-state.interface';
import {RetrieveGames} from "./game.actions";
import {FormGroup} from "@angular/forms";
import {Game} from "../types/games";

@Injectable()
export class GameStore {
    constructor(private store: Store<AppState>) {}

    public getGameState(): void {
        return this.store.dispatch(new RetrieveGames() )
    }

    // public editProfileState(profile: Profile): void {
    //     return this.store.dispatch(new EditProfile(profile))
    // }
}
