import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Rx";

@Injectable()
export class DesignerService {
    constructor(private http: Http) {
    }

    public saveQuestion(question: string, answers: any): Observable<any> {
        let body = {
            question: question,
            answers: answers,
            rightAnswer: 1
        };
        return this.http.post("http://localhost:8080/armhistory/saveQuestion", body)
    }
}