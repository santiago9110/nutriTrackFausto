import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Food } from '../interfaces/food';

@Injectable({
  providedIn: 'root'
})
export class FoodApiService {

  baseUrl = "http://localhost:3000/db/";

  constructor(private _httpService: HttpClient) { }


  getFoods(foodName: string): Observable<Food[]> {
    const url = `${this.baseUrl}?name_like=${encodeURIComponent(foodName)}`;
    return this._httpService.get<Food[]>(url);
  }
}
