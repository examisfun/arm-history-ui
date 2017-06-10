import {Component} from "@angular/core";
import {DesignerService} from "./designer.service";

@Component({
    moduleId: module.id,
    templateUrl: 'designer.html',
    styleUrls: ['designer.css']
})
export class DesignerComponent {
    private text = "";

    private question = "";
    private answers: any = {};

    constructor(private designerService: DesignerService) {
    }

    private updateQuestion() {
        this.question = "";
        this.answers = {};

        let match;
        let numberParenthesisRegex = /\d+[)]/g;

        let questionIndexes: any = [];
        while (match = numberParenthesisRegex.exec(this.text)) {
            questionIndexes.push([match.index, numberParenthesisRegex.lastIndex]);
        }

        if (questionIndexes.length) {
            this.question = this.text.substring(0, questionIndexes[0][0]);

            for (let i = 0; i < questionIndexes.length; ++i) {
                let numberStart = questionIndexes[i][0];
                let numberEnd = questionIndexes[i][1] - 1;
                let answerStart = questionIndexes[i][1];
                let answerEnd: number;
                if (i != questionIndexes.length - 1) {
                    answerEnd = questionIndexes[i + 1][0];
                }
                else {
                    answerEnd = this.text.length;
                }
                let answerNumber = +this.text.substring(numberStart, numberEnd);
                let answerText = this.text.substring(answerStart, answerEnd);
                this.answers[answerNumber] = answerText;
            }


            console.log("question:", this.question);
            console.log("answers:", this.answers);
        }
    }

    getAnswers() {
        return Object.values(this.answers);
    }

    submit() {
        this.designerService.saveQuestion(this.question, this.answers).subscribe();
    }
}