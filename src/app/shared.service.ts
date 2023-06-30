import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  url1 = 'https://api.instantwebtools.net/v1/passenger?page=0&size=10';
  url2 = 'https://dummy.restapiexample.com/api/v1/employee/1';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private _http: HttpClient) {}

  getEmployeeById(): Observable<any> {
    return this._http.get<any>(this.url2, { headers: this.headers });
  }

  getAirlineById(id: number) {
    return this._http.get<any>(this.url1);
  }
}
