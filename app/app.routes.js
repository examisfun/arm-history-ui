"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var designer_component_1 = require("./designer/designer.component");
var question_form_component_1 = require("./question_form/question_form.component");
var appRoutes = [
    { path: '', redirectTo: '/um/login', pathMatch: 'full' },
    { path: "designer", component: designer_component_1.DesignerComponent },
    { path: "question_form", component: question_form_component_1.QuestionFormComponent },
    { path: 'um', loadChildren: 'app/user-management/user-management.module#UserManagementModule' },
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routes.js.map