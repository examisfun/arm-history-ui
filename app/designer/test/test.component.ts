import {Component, Input, OnInit} from "@angular/core";
import {DesignerService} from "../designer.service";
import {Test} from "./test.model";
import {TestType} from "./test-type.enum";
import {getTextSubstrings} from "../../shared-functions";

@Component({
    moduleId: module.id,
    selector: 'test',
    templateUrl: 'test.html'
})
export class TestComponent implements OnInit {
    private question = "";
    private answers: any = {};

    @Input() test: Test = <Test>{};

    constructor(private designerService: DesignerService) {
    }

    ngOnInit() {
        this.updateQuestion()
    }

    private updateQuestion() {
        this.question = "";
        this.answers = {};

        switch (this.test.type) {
            case TestType.STANDARD:
                this.parseStandardTest();
                break;
            case TestType.SUBQUESTION:
                this.parseSubQuestionTest();
                break;
        }

    }

    getAnswers() {
        return Object.values(this.answers);
    }

    getTestTypeValues() {
        return Object.values(TestType).filter(e => typeof( e ) == "number");
    }

    getTestTypeName(value: number) {
        return TestType[value];
    }

    private parseStandardTest() {
        let text = this.test.text;
        let numberParenthesisRegex = /\d+[)]/g;
        let numberStartEndIndexes: Array<number> = [];

        let match;
        while (match = numberParenthesisRegex.exec(text)) {
            numberStartEndIndexes.push(match.index, numberParenthesisRegex.lastIndex);
        }

        if (numberStartEndIndexes.length) {
            let textParts = getTextSubstrings(text, numberStartEndIndexes);

            this.question = textParts[0].replace(/^\s\n+|\s\n+$/g, '').trim();

            for (let i = 1; i < textParts.length; i += 2) {
                let answerNumber = +textParts[i].substring(0, textParts[i].length - 1);
                let answerText = textParts[i + 1].replace(/^\s\n+|\s\n+$/g, '').trim();
                this.answers[answerNumber] = answerText;
            }
        }
    }

    private parseSubQuestionTest() {
    }

    submit() {
        this.designerService.saveQuestion(this.question, this.answers).subscribe();
    }
}