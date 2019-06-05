import { Loadable } from './loadable.interface';

export function createDefaultLoadableState(): Loadable {
    return {
        isLoading: false,
        error: null
    };
}
