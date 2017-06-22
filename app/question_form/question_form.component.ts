import {Component, OnInit} from "@angular/core";
import {QuestionFormService} from "./question_form.service";
import {Subject} from "./models/subject.model";
import {Header} from "./models/header.model";


@Component({
    moduleId: module.id,
    templateUrl: 'question_form.html',
    styleUrls: ['question_form.css']
})
export class QuestionFormComponent implements OnInit{

    subjects : Subject[];
    selectedSubjectId: number;

    headers : Header[];
    selectedHeaderId: number;

    constructor(private questionFormService: QuestionFormService) {
    }

    ngOnInit() {
        // Load subjects
        this.loadSubjects()
    }

    loadSubjects(){
        this.questionFormService.getSubjects().subscribe(
            subjects => this.subjects = subjects, //Bind to view
            err => {
                // Log errors if any
                console.log(err);
            });
    }

    // loadHeadersBySubjectId(subjectId : number){
    //     console.log(subjectId)
    //     if(subjectId != null){
    //         this.questionFormService.getHeadersBySubjectId(subjectId).subscribe(
    //             headers => this.headers = headers, //Bind to view
    //             err => {
    //                 // Log errors if any
    //                 console.log(err);
    //             });
    //     }
    // }
}