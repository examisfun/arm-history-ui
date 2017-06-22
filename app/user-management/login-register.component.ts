import {Component} from "@angular/core";
import {AbstractControl, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {UserModel} from "./models/user.model";
import {UserManagementService} from "./user-management.service";
import {Observable} from "rxjs/Rx";

@Component({
    moduleId: module.id,
    selector: 'login-register',
    templateUrl: "login-register.html",
    styleUrls: ["login-register.css"]
})
export class LoginRegisterComponent {
    user = new UserModel();
    form: FormGroup;

    constructor(private userManagementService: UserManagementService,
                private formBuilder: FormBuilder) {
        this.form = this.formBuilder.group({
            firstName: new FormControl(),
            lastName: new FormControl(),
            login: new FormControl('', [], this.getLoginValidation.bind(this)),
            email: new FormControl('', [], this.getEmailValidation.bind(this)),
            password: new FormControl(),
            repeatPassword: new FormControl()
        }, {validator: this.validatePasswords('password', 'repeatPassword')});
    }

    getLoginValidation(control: AbstractControl) {
        if (control.valueChanges) {
            return control.valueChanges.debounceTime(500)
                .flatMap(value => this.userManagementService.isLoginAvailable(value))
                .map(used => used ? {used: true} : null)
                .first();
        }
        else {
            return Observable.of(null)
        }
    }

    getEmailValidation(control: AbstractControl) {
        if (control.valueChanges) {
            return control.valueChanges.debounceTime(500)
                .flatMap(value => this.userManagementService.isEmailAvailable(value))
                .map(used => used ? {used: true} : null)
                .first();
        }
        else {
            return Observable.of(null)
        }
    }

    validatePasswords(passwordKey: string, passwordConfirmationKey: string) {
        return (group: FormGroup) => {
            let passwordInput = group.controls[passwordKey],
                passwordConfirmationInput = group.controls[passwordConfirmationKey];
            if (passwordInput.value !== passwordConfirmationInput.value) {
                return passwordConfirmationInput.setErrors({notSame: true})
            }
            else {
                return passwordConfirmationInput.setErrors(null);
            }
        }
    };
}