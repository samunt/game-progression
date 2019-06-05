import {HttpErrorResponse} from "@angular/common/http";

export interface Profile {
    currentAccount: boolean;
    id: number;
    firstName: string;
    lastName: string;
    avatar: string;
    avgNumHrs: number;
    error: HttpErrorResponse;
}
