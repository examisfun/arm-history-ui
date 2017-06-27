"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var app_routes_1 = require("./app.routes");
var designer_component_1 = require("./designer/designer.component");
var designer_service_1 = require("./designer/designer.service");
var test_component_1 = require("./designer/test/test.component");
var question_form_component_1 = require("./question_form/question_form.component");
var question_form_service_1 = require("./question_form/question_form.service");
var primeng_1 = require("primeng/primeng");
var question_path_component_1 = require("./designer/question-path/question-path.component");
var dropdown_1 = require("primeng/components/dropdown/dropdown");
var animations_1 = require("@angular/platform-browser/animations");
var common_1 = require("@angular/common");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            app_routes_1.routing,
            common_1.CommonModule,
            platform_browser_1.BrowserModule,
            animations_1.BrowserAnimationsModule,
            http_1.HttpModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            primeng_1.DataListModule,
            dropdown_1.DropdownModule,
            primeng_1.TabViewModule
        ],
        declarations: [
            app_component_1.AppComponent,
            designer_component_1.DesignerComponent,
            test_component_1.TestComponent,
            question_form_component_1.QuestionFormComponent,
            question_path_component_1.QuestionPathComponent
        ],
        providers: [
            designer_service_1.DesignerService,
            question_form_service_1.QuestionFormService,
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map