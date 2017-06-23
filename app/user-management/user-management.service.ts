import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Rx";
import {Http, URLSearchParams} from "@angular/http";
import {UserDto} from "./models/user.dto";
import {UserValidationResult} from "./models/user-validation-result";

@Injectable()
export class UserManagementService {
    constructor(private http: Http) {
    }

    saveUser(user: UserDto): Observable<UserValidationResult> {
        return this.http.post("http://localhost:8082/authentication/saveuser", user)
            .map(response => <UserValidationResult>response.json());
    }

    isLoginAvailable(login: string): Observable<boolean> {
        let params: URLSearchParams = new URLSearchParams();
        params.set('login', login);

        return this.http.get("http://localhost:8082/authentication/checkLogin", {search: params})
            .map(response => response.json());
    }

    isEmailAvailable(email: string): Observable<boolean> {
        let params: URLSearchParams = new URLSearchParams();
        params.set('email', email);

        return this.http.get("http://localhost:8082/authentication/checkEmail", {search: params})
            .map(response => response.json());
    }
}