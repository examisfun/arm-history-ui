import {RouterModule, Routes} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {DesignerComponent} from "./designer/designer.component";
import {QuestionFormComponent} from "./question_form/question_form.component";
import {LoginRegisterComponent} from "./user-management/login-register.component";

const appRoutes: Routes = [
    {path: '', redirectTo: '/designer', pathMatch: 'full'},
    {path: "designer", component: DesignerComponent},
    {path: '', redirectTo: '/question_form', pathMatch: 'full'},
    {path: "question_form", component: QuestionFormComponent},
    {path: "login", component: LoginRegisterComponent}
];
export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

