import {NgModule} from "@angular/core";
import {HttpModule} from "@angular/http";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppComponent} from "./app.component";
import {routing} from "./app.routes";
import {DesignerComponent} from "./designer/designer.component";
import {DesignerService} from "./designer/designer.service";
import {TestComponent} from "./designer/test/test.component";
import {QuestionFormComponent} from "./question_form/question_form.component";
import {QuestionFormService} from "./question_form/question_form.service";
import {DataListModule, TabViewModule} from "primeng/primeng";
import {QuestionPathComponent} from "./designer/question-path/question-path.component";
import {DropdownModule} from "primeng/components/dropdown/dropdown";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {UserManagementService} from "./user-management/user-management.service";
import {LoginRegisterComponent} from "./user-management/login-register.component";
import {MdButtonModule, MdInputModule} from "@angular/material";


@NgModule({
    imports: [
        routing,
        BrowserModule,
        BrowserAnimationsModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        DataListModule,
        DropdownModule,
        TabViewModule,
        MdInputModule,
        MdButtonModule
    ],
    declarations: [
        AppComponent,
        DesignerComponent,
        TestComponent,
        QuestionFormComponent,
        QuestionPathComponent,
        LoginRegisterComponent
    ],
    providers: [
        DesignerService,
        QuestionFormService,
        UserManagementService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}