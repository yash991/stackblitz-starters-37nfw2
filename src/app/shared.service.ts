import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  url1 = 'https://api.instantwebtools.net/v1/passenger?page=0&size=20';
  url2 = 'https://api.instantwebtools.net/v1/airlines/';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private _http: HttpClient) {}

  getPassengerDetails() {
    return this._http.get<any>(this.url1, { headers: this.headers });
  }

  getAirlineById(id: number): Observable<any> {
    return this._http.get<any>(this.url2+id, { headers: this.headers });
  }
}
