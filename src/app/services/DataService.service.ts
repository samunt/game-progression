import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Profile} from "../features/profile/types/profile";

@Injectable()
export class DataService {
    private static httpClient: HttpClient;
    static getProfile() {
        return this.httpClient.get<Profile>(`/users`);
    }

}
