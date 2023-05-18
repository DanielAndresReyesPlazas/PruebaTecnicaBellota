import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UpdatePriceList } from '../models/UpdatePriceList';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UpdatePricesService {
  private API_SERVER = 'http://localhost:4000/prueba';

  constructor(public http: HttpClient) {}

  updatePriceList(data: UpdatePriceList): Observable<any> {
    return this.http.post(this.API_SERVER + '/updateListPrices', data);
  }
}
