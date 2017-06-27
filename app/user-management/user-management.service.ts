import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Rx";
import {Http, URLSearchParams} from "@angular/http";
import {UserRegisterDto} from "./models/dto/user-register.dto";
import {UserValidationResult} from "./models/user-validation-result";
import {UserLoginDto} from "./models/dto/user-login.dto";
import {LoginResultDto} from "./models/dto/login-result.dto";
import {UserData} from "./models/dto/user-data";
import {ApplicationUrlProvider} from "../services/application-url-provider.service";

@Injectable()
export class UserManagementService {
    constructor(private http: Http,
                private applicationUrlProvider: ApplicationUrlProvider) {
    }

    saveUser(user: UserRegisterDto): Observable<UserValidationResult> {
        let url = this.applicationUrlProvider.getApplicationUrl() + "/authentication/saveuser";
        return this.http.post(url, user)
            .map(response => <UserValidationResult>response.json());
    }

    isLoginAvailable(login: string): Observable<boolean> {
        let params: URLSearchParams = new URLSearchParams();
        params.set('login', login);

        let url = this.applicationUrlProvider.getApplicationUrl() + "/authentication/checkLogin";
        return this.http.get(url, {search: params})
            .map(response => response.json());
    }

    isEmailAvailable(email: string): Observable<boolean> {
        let params: URLSearchParams = new URLSearchParams();
        params.set('email', email);

        let url = this.applicationUrlProvider.getApplicationUrl() + "/authentication/checkEmail";
        return this.http.get(url, {search: params})
            .map(response => response.json());
    }

    login(userLoginDto: UserLoginDto): Observable<LoginResultDto> {
        let url = this.applicationUrlProvider.getApplicationUrl() + "/authentication/login";
        return this.http.post(url, userLoginDto)
            .map(response => <LoginResultDto>response.json());
    }

    loadUserById(currentUserId: string): Observable<UserData> {
        let params: URLSearchParams = new URLSearchParams();
        params.set('userId', currentUserId);

        let url = this.applicationUrlProvider.getApplicationUrl() + "/authentication/userbyid";
        return this.http.get(url,  {search: params}).map(response => <UserData>response.json())
    }
}