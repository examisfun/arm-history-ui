import {Subject} from "../../question_form/models/subject.model";
import {Header} from "../../question_form/models/header.model";
import {QuestionFormService} from "../../question_form/question_form.service";
import {Book} from "../../question_form/models/book.model";
import {Part} from "../../question_form/models/part.model";
import {Component} from "@angular/core";
import {SelectItem} from "primeng/primeng";

@Component({
    moduleId: module.id,
    selector: 'question-path',
    templateUrl: 'question-path.html'
})
export class QuestionPathComponent {

    private subjects: Subject[];
    private subjectItems: SelectItem[];
    private selectedSubjectId: number;

    private books: Book[];
    private bookItems: SelectItem[];
    private selectedBookId: number;

    private parts: Part[];
    private partItems: SelectItem[];
    private selectedPartId: number;

    private headers: Header[];
    private headerItems: SelectItem[];
    private selectedHeaderId: number;

    constructor(private questionFormService: QuestionFormService) {
    }

    private initSelectItems(){
        this.subjectItems = [];
        this.subjectItems.push({label: '--ընտրել առարկան--', value: null});
        this.bookItems = [];
        this.bookItems.push({label: '--ընտրել գիրքը--', value: null});
        this.partItems = [];
        this.partItems.push({label: '--ընտրել մասը--', value: null});
        this.headerItems = [];
        this.headerItems.push({label: '--ընտրել գլուխը--', value: null});
    }

    ngOnInit() {
        this.initSelectItems();
        this.loadSubjects();
    }

    private loadSubjects() {
        this.questionFormService.getSubjects().
        subscribe(
            subjects =>{ this.subjects = subjects;
            if(this.subjects){
                this.subjects.forEach((subject)=>{
                    this.subjectItems.push({label: subject.name, value: subject.subjectId})
                })
            }
        });
    }

    private loadBooks(subjectId: number) {
        this.bookItems = [];
        this.bookItems.push({label: '--ընտրել գիրքը--', value: null});
        this.partItems = [];
        this.partItems.push({label: '--ընտրել մասը--', value: null});
        this.headerItems = [];
        this.headerItems.push({label: '--ընտրել գլուխը--', value: null});
        if (subjectId != null) {
            this.questionFormService.getBooks(subjectId).subscribe(books => {this.books = books;
                if(this.books){
                    this.books.forEach((book)=>{
                        this.bookItems.push({label: book.name, value: book.bookId})
                    })
                }
            });
        }
    }

    private loadParts(bookId: number) {
        this.partItems = [];
        this.partItems.push({label: '--ընտրել մասը--', value: null});
        if (bookId != null) {
            this.questionFormService.getParts(bookId).
            subscribe(parts => {
                this.parts = parts;
                if(this.parts){
                    this.parts.forEach((part)=>{
                        this.partItems.push({label: part.name, value: part.partId})
                    })
                }
            });
        }
    }

    private loadHeaders(partId: number) {
        this.headerItems = [];
        this.headerItems.push({label: '--ընտրել գլուխը--', value: null});
        if (partId != null) {
            this.questionFormService.getHeaders(partId).subscribe(headers => {
                this.headers = headers;
                if(this.headers){
                    this.headers.forEach((part)=>{
                        this.headerItems.push({label: part.name, value: part.headerId})
                    })
                }
            });
        }
    }

}