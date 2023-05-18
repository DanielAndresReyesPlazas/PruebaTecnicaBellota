import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AverageCalculator } from '../models/AverageCalculator';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AverageCalculatorService {
  private API_SERVER = 'http://localhost:4000/prueba';

  constructor(public http: HttpClient) {}

  calculateAverageCost(data: AverageCalculator): Observable<any> {
    return this.http.post(this.API_SERVER + '/newCostProduct', data);
  }
}
