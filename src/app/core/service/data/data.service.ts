import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  public getCountryList(): Observable<any> {
    return this.http.get('assets/JSON/countrys.json').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public getCustomerList(): Observable<any> {
    return this.http.get('').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
}
