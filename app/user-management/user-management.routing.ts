import {RouterModule, Routes} from "@angular/router";
import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";
import {ModuleWithProviders} from "@angular/core";

const userManagementRoutes: Routes = [
    {path: "register", component: RegisterComponent},
    {path: "login", component: LoginComponent}
];
export const userManagementRouting: ModuleWithProviders = RouterModule.forChild(userManagementRoutes);
