import {Component} from "@angular/core";
import {TestType} from "./test/test-type.enum";
import {Test} from "./test/test.model";
import {getTextSubstrings} from "./parse-helper";

@Component({
    moduleId: module.id,
    templateUrl: 'designer.html',
    styleUrls: ['designer.css']
})
export class DesignerComponent {

    private text = "";
    public tests: Array<Test> = [];
    public testTypes = TestType.STANDARD;

    separateTests() {
        let match;
        let newQuestionRegex = /\n\d+[.]/g;
        let newTestIndexes: Array<number> = [];

        while (match = newQuestionRegex.exec(this.text)) {
            newTestIndexes.push(match.index);
        }
        this.tests = getTextSubstrings(this.text, newTestIndexes)
            .map(testText => testText.replace(/^\s\n+|\s\n+$/g, '').trim())
            .map(testText => <Test> {text: testText, type: this.testTypes});


        // this.tests = this.text
        //     .replace(/\n\d+[.]/g, "\n\n")
        //     .split('\n\n')
        //     .map(test => test.replace(/\n(?!\d+[)])/g, " "))
        //     .map(test => test.replace(/^\s\n+|\s\n+$/g,''))
        //     .map(test => test.trim())
        //     .filter(test => test != "");
    }

    getTestTypeValues() {
        return Object.values(TestType).filter(e => typeof( e ) == "number");
    }

    getTestTypeName(value: number) {
        return TestType[value];
    }
}