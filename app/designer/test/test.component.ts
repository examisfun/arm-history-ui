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
    private subQuestion = "";
    private answers: any = {};

    @Input() test: Test = <Test>{};

    constructor(private designerService: DesignerService) {
    }

    ngOnInit() {
        this.updateQuestion()
    }

    private updateQuestion() {
        this.question = "";
        this.subQuestion = "";
        this.answers = {};

        try {
            switch (this.test.type) {
                case TestType.STANDARD:
                    this.parseStandardTest();
                    break;
                case TestType.SUBQUESTION:
                    this.parseSubQuestionTest();
                    break;
            }
        }
        catch (ex) {}
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
        let text = this.test.text.replace(/\n(?!\d[)])(?![ա-ֆ][․)])/g, " ");

        let possibleAnswerStart = /\n\d[)]/g.exec(text).index;
        this.question = text.substring(0, possibleAnswerStart).replace(/^\s\n+|\s\n+$/g, '').trim();

        this.extractPossibleAnswers();
    }

    private parseSubQuestionTest() {
        let text = this.test.text;
        console.log(this.test.text)

        let subQuestionStart = /\n[ա][.)]/g.exec(text).index;
        let subQuestionEnd = /\n[1)]/g.exec(text).index;

        this.question = text.substring(0, subQuestionStart).replace(/^\s\n+|\s\n+$/g, '').trim();
        this.subQuestion = text.substring(subQuestionStart, subQuestionEnd).replace(/\n(?![ա-ֆ][.)])/g, " ");

        this.extractPossibleAnswers();
    }

    submit() {
        this.designerService.saveQuestion(this.question, this.answers).subscribe();
    }

    private extractPossibleAnswers() {
        let text = this.test.text;

        let match;

        let numberParenthesisRegex = /\d+[)]/g;
        let numberStartEndIndexes: Array<number> = [];

        while (match = numberParenthesisRegex.exec(text)) {
            numberStartEndIndexes.push(match.index, numberParenthesisRegex.lastIndex);
        }

        if (numberStartEndIndexes.length) {
            let textParts = getTextSubstrings(text, numberStartEndIndexes);

            for (let i = 1; i < textParts.length; i += 2) {
                let answerNumber = +textParts[i].substring(0, textParts[i].length - 1);
                let answerText = textParts[i + 1].replace(/^\s\n+|\s\n+$/g, '').trim();
                this.answers[answerNumber] = answerText;
            }
        }
    }
}