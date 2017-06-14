"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var test_type_enum_1 = require("./test/test-type.enum");
var parse_helper_1 = require("./parse-helper");
var DesignerComponent = (function () {
    function DesignerComponent() {
        this.text = "";
        this.tests = [];
        this.testTypes = test_type_enum_1.TestType.STANDARD;
    }
    DesignerComponent.prototype.separateTests = function () {
        var _this = this;
        var match;
        var newQuestionRegex = /\n\d+[.]/g;
        var newTestIndexes = [];
        while (match = newQuestionRegex.exec(this.text)) {
            newTestIndexes.push(match.index);
        }
        this.tests = parse_helper_1.getTextSubstrings(this.text, newTestIndexes)
            .map(function (testText) { return testText.replace(/^\s\n+|\s\n+$/g, '').trim(); })
            .map(function (testText) { return ({ text: testText, type: _this.testTypes }); });
        // this.tests = this.text
        //     .replace(/\n\d+[.]/g, "\n\n")
        //     .split('\n\n')
        //     .map(test => test.replace(/\n(?!\d+[)])/g, " "))
        //     .map(test => test.replace(/^\s\n+|\s\n+$/g,''))
        //     .map(test => test.trim())
        //     .filter(test => test != "");
    };
    DesignerComponent.prototype.getTestTypeValues = function () {
        return Object.values(test_type_enum_1.TestType).filter(function (e) { return typeof (e) == "number"; });
    };
    DesignerComponent.prototype.getTestTypeName = function (value) {
        return test_type_enum_1.TestType[value];
    };
    return DesignerComponent;
}());
DesignerComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'designer.html',
        styleUrls: ['designer.css']
    })
], DesignerComponent);
exports.DesignerComponent = DesignerComponent;
//# sourceMappingURL=designer.component.js.map