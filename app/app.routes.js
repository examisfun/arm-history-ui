"use strict";
var router_1 = require("@angular/router");
var designer_component_1 = require("./designer/designer.component");
var question_form_component_1 = require("./question_form/question_form.component");
var appRoutes = [
    { path: '', redirectTo: '/designer', pathMatch: 'full' },
    { path: "designer", component: designer_component_1.DesignerComponent },
    { path: '', redirectTo: '/question_form', pathMatch: 'full' },
    { path: "question_form", component: question_form_component_1.QuestionFormComponent }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routes.js.map