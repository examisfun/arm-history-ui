import {Injectable} from "@angular/core";
import {Http, Response, URLSearchParams} from "@angular/http";
import {Observable} from "rxjs/Rx";
import {Subject} from "./models/subject.model";
import {Header} from "./models/header.model";

@Injectable()
export class QuestionFormService {
    constructor(private http: Http) {
    }

    public getSubjects(): Observable<Subject[]>{
        return this.http.get("http://localhost:8082/armhistory/getSubjects")
        // ...and calling .json() on the response to return data
            .map((res:Response) => res.json())
            //...errors if any
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    public getHeaders(partId: number): Observable<Header[]>{
        let params: URLSearchParams = new URLSearchParams();
        params.set('partId', partId.toString());

        return this.http.get("http://localhost:8082/armhistory/getHeaders", {search : params})
            .map((res:Response) => res.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    getBooks(subjectId: number) {
        let params: URLSearchParams = new URLSearchParams();
        params.set('subjectId', subjectId.toString());

        return this.http.get("http://localhost:8082/armhistory/getBooks", {search : params})
            .map((res:Response) => res.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    getParts(bookId: number) {
        let params: URLSearchParams = new URLSearchParams();
        params.set('bookId', bookId.toString());

        return this.http.get("http://localhost:8082/armhistory/getParts", {search : params})
            .map((res:Response) => res.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }
}