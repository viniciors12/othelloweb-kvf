import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Juego } from '../modelos/juego';
import { Global } from './global';

@Injectable()
export class IngameService{
    public url: string;

    constructor(
        public _http: HttpClient
    ) {
        this.url = Global.url;
    }

    getJuego(): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.get(this.url+"test");
    }

}