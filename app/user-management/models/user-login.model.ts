import {UserLoginDto} from "./dto/user-login.dto";

export class UserLoginModel {
    private _login: string;
    private _password: string;

    constructor(userLoginDto?: UserLoginDto) {
        if (userLoginDto) {
            this._login = userLoginDto.login;
            this._password = userLoginDto.password;
        }
    }

    get login(): string {
        return this._login;
    }

    set login(value: string) {
        this._login = value;
    }

    get password(): string {
        return this._password;
    }

    set password(value: string) {
        this._password = value;
    }
}
