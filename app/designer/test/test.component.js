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
var parse_helper_1 = require("../parse-helper");
var TestComponent = (function () {
    function TestComponent(designerService) {
        this.designerService = designerService;
        this.question = "";
        this.subQuestion = "";
        this.answers = {};
        this.test = {};
    }
    TestComponent.prototype.ngOnInit = function () {
        this.updateQuestion();
    };
    TestComponent.prototype.updateQuestion = function () {
        this.questionNumber = -1;
        this.question = "";
        this.subQuestion = "";
        this.answers = {};
        try {
            var extractedQuestion = parse_helper_1.extractQuestionNumber(this.test.text);
            this.questionNumber = extractedQuestion.questionNumber;
            var text = extractedQuestion.text;
            var parseResult = void 0;
            switch (this.test.type) {
                case test_type_enum_1.TestType.STANDARD:
                    parseResult = parse_helper_1.parseStandardTest(text);
                    break;
                case test_type_enum_1.TestType.SUBQUESTION:
                    parseResult = parse_helper_1.parseSubQuestionTest(text);
                    break;
            }
            this.question = parseResult.question;
            this.subQuestion = parseResult.subQuestion;
            this.answers = parseResult.possibleAnswers;
        }
        catch (ex) {
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