import {Component, Input, OnInit} from "@angular/core";
import {DesignerService} from "../designer.service";
import {Test} from "./test.model";
import {TestType} from "./test-type.enum";
import {extractQuestionNumber, parseStandardTest, parseSubQuestionTest} from "../parse-helper";

@Component({
    moduleId: module.id,
    selector: 'test',
    templateUrl: 'test.html'
})
export class TestComponent implements OnInit {
    private question = "";
    private subQuestion = "";
    private answers: any = {};
    private questionNumber: number;

    @Input() test: Test = <Test>{};

    constructor(private designerService: DesignerService) {
    }

    ngOnInit() {
        this.updateQuestion()
    }

    private updateQuestion() {
        this.questionNumber = -1;
        this.question = "";
        this.subQuestion = "";
        this.answers = {};
        try {
            let extractedQuestion = extractQuestionNumber(this.test.text);
            this.questionNumber = extractedQuestion.questionNumber;

            let text = extractedQuestion.text;
            let parseResult: { question: string, subQuestion: string, possibleAnswers: any };

            switch (this.test.type) {
                case TestType.STANDARD:
                    parseResult = parseStandardTest(text);
                    break;
                case TestType.SUBQUESTION:
                    parseResult = parseSubQuestionTest(text);
                    break;
            }

            this.question = parseResult.question;
            this.subQuestion = parseResult.subQuestion;
            this.answers = parseResult.possibleAnswers;
        }
        catch (ex) {
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

    submit() {
        this.designerService.saveQuestion(this.question, this.answers).subscribe();
    }
}