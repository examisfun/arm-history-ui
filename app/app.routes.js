"use strict";
var router_1 = require("@angular/router");
var designer_component_1 = require("./designer/designer.component");
var appRoutes = [
    { path: '', redirectTo: '/designer', pathMatch: 'full' },
    { path: "designer", component: designer_component_1.DesignerComponent },
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routes.js.map