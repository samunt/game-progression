/* tslint:disable:no-any */
import { ActionReducer } from '@ngrx/store';
import { storeLogger } from 'ngrx-store-logger';

import { environment } from 'src/environments/environment';
import { AppState } from '../types/app-state';

export function logger(reducer: ActionReducer<AppState>): any {
    return storeLogger({
        collapsed: true
    })(reducer);
}

export const storeConfig = {
    metaReducers: (environment.production ? [] : [logger])
};
