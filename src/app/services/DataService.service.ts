import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Profile} from "../features/profile/types/profile";
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
            .post<Profile>('/users', payload)
    }
}
