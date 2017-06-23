import {Component} from "@angular/core";
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {UserModel} from "./models/user.model";
import {UserManagementService} from "./user-management.service";
import {Observable} from "rxjs/Rx";
import {UserDto} from "./models/user.dto";

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
        let emailPattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        this.form = this.formBuilder.group({
            firstName: new FormControl('', Validators.required),
            lastName: new FormControl('', Validators.required),
            login: new FormControl('', [Validators.required, Validators.minLength(6)], this.getLoginValidation.bind(this)),
            email: new FormControl('', [Validators.required, Validators.pattern(emailPattern)], this.getEmailValidation.bind(this)),
            password: new FormControl('', [Validators.required, Validators.minLength(6)]),
            repeatPassword: new FormControl('', Validators.required)
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

    submitForm() {
        let userDto = <UserDto> {
            login: this.user.login,
            email: this.user.email,
            firstName: this.user.firstName,
            lastName: this.user.lastName,
            password: this.user.password,
            repeatPassword: this.user.repeatPassword,
        };
        this.userManagementService.saveUser(userDto).subscribe(userValidationResult => {
            Object.keys(userValidationResult.validationErrors).forEach(key => {
                this.form.get(key).setErrors({[userValidationResult.validationErrors[key]]: true});
            });
        })
    }
}