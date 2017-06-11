import {NgModule} from "@angular/core";
import {HttpModule} from "@angular/http";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppComponent} from "./app.component";
import {routing} from "./app.routes";
import {DesignerComponent} from "./designer/designer.component";
import {DesignerService} from "./designer/designer.service";
import {TestComponent} from "./designer/test/test.component";

@NgModule({
    imports: [BrowserModule, routing, HttpModule, FormsModule, ReactiveFormsModule],
    declarations: [AppComponent, DesignerComponent, TestComponent],
    providers: [DesignerService],
    bootstrap: [AppComponent]
})
export class AppModule {
}