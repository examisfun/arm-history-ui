import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Rx";
import {Http, URLSearchParams} from "@angular/http";

@Injectable()
export class UserManagementService {
    constructor(private http: Http) {
    }

    isLoginAvailable(login: string): Observable<boolean> {
        let params: URLSearchParams = new URLSearchParams();
        params.set('login', login);

        return this.http.get("http://localhost:8082/authentication/checkLogin", {search: params})
            .map(response => response.json());
    }

    isEmailAvailable(email: string): Observable<boolean> {
        let params: URLSearchParams = new URLSearchParams();
        params.set('email', email || "a");

        return this.http.get("http://localhost:8082/authentication/checkEmail", {search: params})
            .map(response => response.json());
    }
}