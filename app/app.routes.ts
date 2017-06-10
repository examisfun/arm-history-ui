import {RouterModule, Routes} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {AppComponent} from "./app.component";
import {DesignerComponent} from "./designer/designer.component";

const appRoutes: Routes = [
    {path: '', redirectTo: '/designer', pathMatch: 'full'},
    {path: "designer", component: DesignerComponent},
];
export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

