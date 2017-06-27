import {RouterModule, Routes} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {DesignerComponent} from "./designer/designer.component";
import {QuestionFormComponent} from "./question_form/question_form.component";
import {RegisterComponent} from "./user-management/register/register.component";
import {LoginComponent} from "./user-management/login/login.component";

const appRoutes: Routes = [
    {path: '', redirectTo: '/um/login', pathMatch: 'full'},
    {path: "designer", component: DesignerComponent},
    {path: "question_form", component: QuestionFormComponent},
    {path: 'um', loadChildren: 'app/user-management/user-management.module#UserManagementModule'},
];
export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

