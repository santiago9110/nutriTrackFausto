import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Food } from '../interfaces/food';

@Injectable({
  providedIn: 'root'
})
export class FoodApiService {

  baseUrl = "http://localhost:3000/foods/";

  constructor(private _httpService: HttpClient) { }

  // getAllFoodsFound(foodName:string): Observable<Food[]> {
  //   return this._httpService.get<Food[]>(`${this.baseUrl}/${foodName}`);
  // }

  getFoods(foodName: string): Observable<Food[]> {
    const url = `${this.baseUrl}?name_like=${encodeURIComponent(foodName)}`;
    return this._httpService.get<Food[]>(url);
  }
}
