import {Component} from "@angular/core";
import {AbstractControl, AsyncValidatorFn, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {UserModel} from "./models/user.model";
import {UserManagementService} from "./user-management.service";

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
        return this.userManagementService.isLoginAvailable(control.value)
            .map(used => used ? {used: true} : null)
    }

    getEmailValidation(control: AbstractControl) {
        return this.userManagementService.isEmailAvailable(control.value)
            .map(used => used ? {used: true} : null)
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

    get errors() {
        return JSON.stringify(this.form.get('firstName').errors)
    }
}