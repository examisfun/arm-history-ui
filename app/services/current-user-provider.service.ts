import {Injectable} from "@angular/core";
import {UserData} from "../user-management/models/dto/user-data";
import {CookieService} from "angular2-cookie/core";
import {UserManagementService} from "../user-management/user-management.service";
import {Observable} from "rxjs/Rx";
import {Router} from "@angular/router";

@Injectable()
export class CurrentUserProvider {
    constructor(private cookieService: CookieService,
                private userManagementService: UserManagementService,
                private router: Router) {
    }

    private currentUser: UserData;

    public getCurrentUser(): Observable<UserData> {
        if (this.currentUser) {
            return Observable.of(this.currentUser);
        }
        else {
            let currentUserId = this.cookieService.get("userId");
            if (!currentUserId) {
                this.router.navigateByUrl("login");
            }
            else {
                this.userManagementService.loadUserById(currentUserId).subscribe(userData => {
                    this.currentUser = userData;
                    return userData;
                });
            }
        }
    }

    public setCurrentUser(user: UserData): void {
        this.currentUser = user;
    }
}
