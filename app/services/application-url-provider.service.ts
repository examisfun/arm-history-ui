import {Injectable} from "@angular/core";

@Injectable()
export class ApplicationUrlProvider {
    private applicationUrl = "http://localhost:8082";

    public getApplicationUrl() {
        return this.applicationUrl;
    }
}