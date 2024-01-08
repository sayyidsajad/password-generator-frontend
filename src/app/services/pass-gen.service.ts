import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PassGenService {

  constructor(private _http: HttpClient) { }

  getData(checkboxValues: any): Observable<any> {
    return this._http.post('', checkboxValues);
  }
}
