import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiConsumerService {
  REST_API: string = 'https://dummyapi.io/data/v1/user?limit=10&page=';

  httpHeaders = new HttpHeaders().set('app-id', '6346ecdc44ffd6a5fcfa071c');

  constructor(private httpClient: HttpClient) {}

  changePage(page: String): Observable<any> {
    return this.httpClient.get(this.REST_API + page, {
      headers: this.httpHeaders,
    });
  }
}
