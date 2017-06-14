import {Subject} from "../../question_form/models/subject.model";
import {Header} from "../../question_form/models/header.model";
import {QuestionFormService} from "../../question_form/question_form.service";
import {Book} from "../../question_form/models/book.model";
import {Part} from "../../question_form/models/part.model";
import {Component} from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'question-path',
    templateUrl: 'question-path.html'
})
export class QuestionPathComponent {
    private subjects: Subject[];
    private selectedSubjectId: number;

    private books: Book[];
    private selectedBookId: number;

    private parts: Part[];
    private selectedPartId: number;

    private headers: Header[];
    private selectedHeaderId: number;

    constructor(private questionFormService: QuestionFormService) {
    }

    ngOnInit() {
        this.loadSubjects()
    }

    private loadSubjects() {
        this.questionFormService.getSubject().subscribe(subjects => this.subjects = subjects);
    }

    private loadBooks(subjectId: number) {
        console.log(this.selectedSubjectId)
        if (subjectId != null) {
            this.questionFormService.getBooks(subjectId).subscribe(books => this.books = books);
        }
    }

    private loadParts(bookId: number) {
        if (bookId != null) {
            this.questionFormService.getParts(bookId).subscribe(parts => this.parts = parts);
        }
    }

    private loadHeaders(partId: number) {
        if (partId != null) {
            this.questionFormService.getHeaders(partId).subscribe(headers => this.headers = headers);
        }
    }


}