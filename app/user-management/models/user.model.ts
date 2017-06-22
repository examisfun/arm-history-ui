export class UserModel {
    private _firstName: string;
    private _lastName: string;
    private _email: string;
    private _password: string;
    private _repeatPassword: string;
    private _login: string;

    constructor(user?: {
                    firstName: string,
                    lastName: string,
                    email: string,
                    password: string,
                    repeatPassword: string,
                    login: string
                }) {
        if(user) {
            this._firstName = user.firstName;
            this._lastName = user.lastName;
            this._email = user.email;
            this._password = user.password;
            this._repeatPassword = user.repeatPassword;
            this._login = user.login;
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