import {Component} from "@angular/core";
import {UserLoginModel} from "../models/user-register.model";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {UserManagementService} from "../user-management.service";
import {UserLoginDto} from "../models/dto/user-login.dto";
import {CookieService} from "angular2-cookie/core";
import {CurrentUserProvider} from "../../services/current-user-provider.service";

@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: "login.html",
    styleUrls: ["login.css"]
})
export class LoginComponent {
    user = new UserLoginModel();
    form: FormGroup;
    errorMessage: string;

    constructor(private userManagementService: UserManagementService,
                private formBuilder: FormBuilder,
                private cookieService: CookieService,
                private currentUserProvider: CurrentUserProvider) {
        this.form = this.formBuilder.group({
            login: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required),
        });
    }

    submitForm() {
        let userLoginDto = <UserLoginDto> {
            login: this.user.login,
            password: this.user.password,
        };
        this.errorMessage = null;
        this.userManagementService.login(userLoginDto).subscribe(loginResultDto => {
            if (loginResultDto.success) {
                this.cookieService.put("userId", loginResultDto.userData.userId.toString());
                this.currentUserProvider.setCurrentUser(loginResultDto.userData);
            }
            else {
                this.errorMessage = "Դուք ներմուծել եք սխալ մուտքանուն կամ գաղտնաբառ:"
            }
        });
    }
}