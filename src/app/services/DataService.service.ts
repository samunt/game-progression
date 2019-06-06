import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Profile} from "../features/profile/types/profile";
import {Observable} from "rxjs";
import {async} from "rxjs/internal/scheduler/async";

@Injectable()
export class DataService {
    constructor(private httpClient: HttpClient) {}
    public getProfile(): Observable<Profile> {
        const newcust = {
            "firstName" : "Jon",
            "lastName" : "Doe",
            "id" : 5195435666,
            "avatar"  : "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwit862Hxc3iAhWj1FkKHRJqCigQjRx6BAgBEAU&url=https%3A%2F%2Frealmbags.com%2Fproducts%2Fwitch-doctor-skin&psig=AOvVaw38kyPXmx0CYAuVI1oKo8p4&ust=1559659098384497",
            "avgNum" : 5
        };

        return this.httpClient
            .get<Profile>(`/users/1`);
    }
}
