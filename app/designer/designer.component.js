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
var designer_service_1 = require("./designer.service");
var DesignerComponent = (function () {
    function DesignerComponent(designerService) {
        this.designerService = designerService;
        this.text = "";
        this.question = "";
        this.answers = {};
    }
    DesignerComponent.prototype.updateQuestion = function () {
        this.question = "";
        this.answers = {};
        var match;
        var numberParenthesisRegex = /\d+[)]/g;
        var questionIndexes = [];
        while (match = numberParenthesisRegex.exec(this.text)) {
            questionIndexes.push([match.index, numberParenthesisRegex.lastIndex]);
        }
        if (questionIndexes.length) {
            this.question = this.text.substring(0, questionIndexes[0][0]);
            for (var i = 0; i < questionIndexes.length; ++i) {
                var numberStart = questionIndexes[i][0];
                var numberEnd = questionIndexes[i][1] - 1;
                var answerStart = questionIndexes[i][1];
                var answerEnd = void 0;
                if (i != questionIndexes.length - 1) {
                    answerEnd = questionIndexes[i + 1][0];
                }
                else {
                    answerEnd = this.text.length;
                }
                var answerNumber = +this.text.substring(numberStart, numberEnd);
                var answerText = this.text.substring(answerStart, answerEnd);
                this.answers[answerNumber] = answerText;
            }
            console.log("question:", this.question);
            console.log("answers:", this.answers);
        }
    };
    DesignerComponent.prototype.getAnswers = function () {
        return Object.values(this.answers);
    };
    DesignerComponent.prototype.submit = function () {
        this.designerService.saveQuestion(this.question, this.answers).subscribe();
    };
    return DesignerComponent;
}());
DesignerComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'designer.html',
        styleUrls: ['designer.css']
    }),
    __metadata("design:paramtypes", [designer_service_1.DesignerService])
], DesignerComponent);
exports.DesignerComponent = DesignerComponent;
//# sourceMappingURL=designer.component.js.map