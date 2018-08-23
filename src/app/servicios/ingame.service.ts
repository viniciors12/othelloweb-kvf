import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class IngameService{
    public url: string;
    constructor(
    public _http: HttpClient
    ) {
        this.url = "http://localhost/";
    }

    getJuego(): Observable<any>{
        return this._http.get(this.url);
    }

}