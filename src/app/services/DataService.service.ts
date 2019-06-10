import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Profile} from "../features/profile/types/profile";
import {Game} from "../features/games/types/games";
import {Observable} from "rxjs";

@Injectable()
export class DataService {
    constructor(private httpClient: HttpClient) {}
    public getProfile(): Observable<Profile> {
        return this.httpClient
            .get<Profile>(`/users`);
    }

    public updateProfile(payload): Observable<Profile> {
        return this.httpClient
            .put<Profile>('/users/1', payload)
    }
}
