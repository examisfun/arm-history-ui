"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var designer_service_1 = require("../designer.service");
var test_model_1 = require("./test.model");
var test_type_enum_1 = require("./test-type.enum");
var shared_functions_1 = require("../../shared-functions");
var TestComponent = (function () {
    function TestComponent(designerService) {
        this.designerService = designerService;
        this.question = "";
        this.answers = {};
        this.test = {};
    }
    TestComponent.prototype.ngOnInit = function () {
        this.updateQuestion();
    };
    TestComponent.prototype.updateQuestion = function () {
        this.question = "";
        this.answers = {};
        switch (this.test.type) {
            case test_type_enum_1.TestType.STANDARD:
                this.parseStandardTest();
                break;
            case test_type_enum_1.TestType.SUBQUESTION:
                this.parseSubQuestionTest();
                break;
        }
    };
    TestComponent.prototype.getAnswers = function () {
        return Object.values(this.answers);
    };
    TestComponent.prototype.getTestTypeValues = function () {
        return Object.values(test_type_enum_1.TestType).filter(function (e) { return typeof (e) == "number"; });
    };
    TestComponent.prototype.getTestTypeName = function (value) {
        return test_type_enum_1.TestType[value];
    };
    TestComponent.prototype.parseStandardTest = function () {
        var text = this.test.text;
        var numberParenthesisRegex = /\d+[)]/g;
        var numberStartEndIndexes = [];
        var match;
        while (match = numberParenthesisRegex.exec(text)) {
            numberStartEndIndexes.push(match.index, numberParenthesisRegex.lastIndex);
        }
        if (numberStartEndIndexes.length) {
            var textParts = shared_functions_1.getTextSubstrings(text, numberStartEndIndexes);
            this.question = textParts[0].replace(/^\s\n+|\s\n+$/g, '').trim();
            for (var i = 1; i < textParts.length; i += 2) {
                var answerNumber = +textParts[i].substring(0, textParts[i].length - 1);
                var answerText = textParts[i + 1].replace(/^\s\n+|\s\n+$/g, '').trim();
                this.answers[answerNumber] = answerText;
            }
        }
    };
    TestComponent.prototype.parseSubQuestionTest = function () {
    };
    TestComponent.prototype.submit = function () {
        this.designerService.saveQuestion(this.question, this.answers).subscribe();
    };
    return TestComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", test_model_1.Test)
], TestComponent.prototype, "test", void 0);
TestComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'test',
        templateUrl: 'test.html'
    }),
    __metadata("design:paramtypes", [designer_service_1.DesignerService])
], TestComponent);
exports.TestComponent = TestComponent;
//# sourceMappingURL=test.component.js.map