import {NgModule} from "@angular/core";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {UserManagementService} from "./user-management.service";
import {MdButtonModule, MdInputModule} from "@angular/material";
import {CookieService} from "angular2-cookie/core";
import {CurrentUserProvider} from "../services/current-user-provider.service";
import {ApplicationUrlProvider} from "../services/application-url-provider.service";
import {userManagementRouting} from "./user-management.routing";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

@NgModule({
    imports: [userManagementRouting, FormsModule, ReactiveFormsModule, CommonModule, MdInputModule, MdButtonModule],
    declarations: [LoginComponent, RegisterComponent],
    providers: [UserManagementService, CookieService, CurrentUserProvider, ApplicationUrlProvider]
})
export class UserManagementModule {
}