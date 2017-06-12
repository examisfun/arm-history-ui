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

@NgModule({
    imports: [BrowserModule, routing, HttpModule, FormsModule, ReactiveFormsModule],
    declarations: [AppComponent, DesignerComponent, TestComponent, QuestionFormComponent],
    providers: [DesignerService, QuestionFormService],
    bootstrap: [AppComponent]
})
export class AppModule {
}