import {Injectable} from "@angular/core";
import {Http, Response, URLSearchParams} from "@angular/http";
import {Observable} from "rxjs/Rx";
import {Subject} from "./models/subject.model";
import {Header} from "./models/header.model";

@Injectable()
export class QuestionFormService {
    constructor(private http: Http) {
    }

    public getSubject(): Observable<Subject[]>{
        return this.http.get("http://localhost:8082/armhistory/getSubjects")
        // ...and calling .json() on the response to return data
            .map((res:Response) => res.json())
            //...errors if any
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    public getHeadersBySubjectId(subjectId: number): Observable<Header[]>{

        let params: URLSearchParams = new URLSearchParams();
        params.set('subjectId', subjectId.toString());
        return this.http.get("http://localhost:8082/armhistory/getHeaders", {
            search : params
        })
        // ...and calling .json() on the response to return data
            .map((res:Response) => res.json())
            //...errors if any
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }
}