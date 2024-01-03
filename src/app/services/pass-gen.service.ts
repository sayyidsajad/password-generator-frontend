import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PassGenService {

  private apiUrl = 'http://localhost:3000/';

  constructor(private _http: HttpClient) { }

  getData(checkboxValues: any): Observable<any> {
    return this._http.post(`${this.apiUrl}`, checkboxValues);
  }
}
