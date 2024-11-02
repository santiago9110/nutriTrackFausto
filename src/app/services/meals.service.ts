import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Meals } from '../interfaces/meals';

@Injectable({
  providedIn: 'root'
})
export class MealsService {

  baseUrl = "http://localhost:3000/meals/";

  constructor(private _httpServices: HttpClient) { }

  getMeals(id: number, date: Date): Observable<Meals> {
    return this._httpServices.get<Meals>(`${this.baseUrl}${id}/meals/${date}`);
  }

}
