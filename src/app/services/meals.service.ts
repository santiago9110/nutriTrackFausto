import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, Subscription } from 'rxjs';
import { Meals } from '../interfaces/meals';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { Food } from '../interfaces/food';

@Injectable({
  providedIn: 'root'
})
export class MealsService {

  private userToken?: string | null;
  private currentDate?: string | undefined | null;
  private baseUrl = 'http://localhost:3000/meals'; //URL BASE 

  constructor(private _httpService: HttpClient) {
    this.userToken = localStorage.getItem('userToken');
    this.currentDate = new Date().toISOString().slice(0, 10);
  }

  //Metodo que se ejecuta SIEMPRE que se inicia sesion para crear una MEAL con la fecha de hoy si es que no existe, caso contrario no hace nada
  loadMeals() {

    let todayMeal: Meals[] | undefined;
    this.getUserMealByDate(this.currentDate).subscribe(result => {
      todayMeal = result;
    })

    if (todayMeal) {
      return;
    } else {
      const newMeal: Meals = {
        idUser: this.userToken,
        date: this.currentDate
      }

      this.postMeal(newMeal).subscribe();
    }
  }

  //Retorna todos los meals del usuario con la sesion iniciada usando userToken
  getUserMeals(): Observable<Meals[]> {
    return this._httpService.get<Meals[]>(`${this.baseUrl}?idUser=${this.userToken}`); // URL de todas las meals de un usuario específico
  }

  //Retornar una meal de una fecha especifica del usuario con la sesion iniciada usando userToken
  getUserMealByDate(date: string | undefined | null): Observable<Meals[]> {
    return this._httpService.get<Meals[]>(`${this.baseUrl}?idUser=${this.userToken}&date=${date}`); //URL DE UNA MEAL ESPECIFICA DE UN USUARIO ESPECIFICO
  }

  //Agruega una meal al Json
  postMeal(meal: Meals): Observable<Meals> {
    return this._httpService.post<Meals>(this.baseUrl, meal);
  }

  //metodos para retornar-agregar-eliminar-editar una FOOD a un MEAL especifico


  //retornar un MEALTYPE (breakfast-lunch-snack-dinner) de una fecha especifica del usuario LOGEADO
  getMealType(date: string, mealType: 'breakfast' | 'lunch' | 'snack' | 'dinner'): Observable<Food[]> {
    return this.getUserMealByDate(date).pipe(
      map((meal: Meals[]) => {
        // Asegúrate de manejar el caso en que meal puede ser un arreglo
        const todayMeal = meal[0]; // Accede al primer elemento del arreglo
        return todayMeal ? (todayMeal[mealType] || []) : []; // Devuelve el arreglo del tipo de comida especificado o un arreglo vacío si no existe
      })
    );
  }

  // Método para eliminar una FOOD de una comida MEALespecífica
  deleteFoodFromMeal(mealId: string | undefined, foodId: number | undefined, mealType: 'breakfast' | 'lunch' | 'snack' | 'dinner' | undefined): Observable<Subscription> {
    return this._httpService.get<Meals>(`${this.baseUrl}/${mealId}`).pipe(
      map((meal: Meals) => {
        // Filtrar el array de alimentos eliminando el alimento con el foodId especificado
        if (meal[mealType]) {
          meal[mealType] = meal[mealType]?.filter(food => food.id !== foodId);
        }
        return meal;
      }),
      // Enviar el objeto meal actualizado al servidor para persistir los cambios
      map(updatedMeal => {
        return this._httpService.put<Meals>(`${this.baseUrl}/${mealId}`, updatedMeal).subscribe();
      })
    );
  }

}
