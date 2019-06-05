import { HttpErrorResponse } from '@angular/common/http';

export interface Loadable {
    isLoading: false;
    error: HttpErrorResponse;
}
