import {UserRegisterDto} from "./dto/user-register.dto";
export class UserLoginModel {
    private _firstName: string;
    private _lastName: string;
    private _email: string;
    private _password: string;
    private _repeatPassword: string;
    private _login: string;

    constructor(userRegisterDto?: UserRegisterDto) {
        if (userRegisterDto) {
            this._firstName = userRegisterDto.firstName;
            this._lastName = userRegisterDto.lastName;
            this._email = userRegisterDto.email;
            this._password = userRegisterDto.password;
            this._repeatPassword = userRegisterDto.repeatPassword;
            this._login = userRegisterDto.login;
        }
    }

    get firstName(): string {
        return this._firstName;
    }

    set firstName(value: string) {
        this._firstName = value;
    }

    get lastName(): string {
        return this._lastName;
    }

    set lastName(value: string) {
        this._lastName = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get password(): string {
        return this._password;
    }

    set password(value: string) {
        this._password = value;
    }

    get login(): string {
        return this._login;
    }

    set login(value: string) {
        this._login = value;
    }


    get repeatPassword(): string {
        return this._repeatPassword;
    }

    set repeatPassword(value: string) {
        this._repeatPassword = value;
    }
}