/* tslint:disable:no-any */
import { ActionReducer } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';
import { storeLogger } from 'ngrx-store-logger';

import { environment } from 'src/environments/environment';
import { AppState } from '../types/app-state';

export function logger(reducer: ActionReducer<AppState>): any {
    return storeLogger({
        collapsed: true
    })(reducer);
}

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
    return localStorageSync({
        keys: [],
        rehydrate: true
    })(reducer);
}

export const storeConfig = {
    metaReducers: [].concat(environment.production ? [] : [logger]).concat([localStorageSyncReducer])
};
