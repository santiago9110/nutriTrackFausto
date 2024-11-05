import { Component, Input, OnInit } from '@angular/core';
import { MealCardComponent } from "../meal-card/meal-card.component";
import { MealsService } from '../../../services/meals.service';
import { Meals } from '../../../interfaces/meals';
import { Food } from '../../../interfaces/food';

@Component({
  selector: 'app-meal-list',
  standalone: true,
  imports: [MealCardComponent],
  templateUrl: './meal-list.component.html',
  styleUrl: './meal-list.component.css'
})
export class MealListComponent implements OnInit {
  @Input() dateRecived?: string; //fecha que vamos a recibir de otro componente

  meal?: Meals;
  arrayBreakfast?: Food[];
  arrayLunch?: Food[];
  arraySnack?: Food[];
  arrayDinner?: Food[];

  mealTypeRecived?: 'breakfast' | 'lunch' | 'snack' | 'dinner';

  constructor(private _myMealsService: MealsService) { }


  //falta cambiar la fecha hardcodeada por la fecha que me retorne el componente select fecha
  ngOnInit(): void {
    this._myMealsService.getUserMealByDate('2024-11-01').subscribe(data => {
      this.meal = data[0];
      this.arrayBreakfast = this.meal.breakfast;
      this.arrayLunch = this.meal.lunch;
      this.arraySnack = this.meal.snack;
      this.arrayDinner = this.meal.dinner;
    });
  }

  reciveMealType(mealType: 'breakfast' | 'lunch' | 'snack' | 'dinner' | undefined) {
    this.mealTypeRecived = mealType;
  }

  deleteFoodFromMeal(food: Food) {
    if (this.mealTypeRecived) {
      this._myMealsService.deleteFoodFromMeal(this.meal?.id, food.id, this.mealTypeRecived)
        .toPromise() // Convierte el Observable en una Promesa
        .then(() => {
          // Recarga la página una vez que la eliminación se complete
          window.location.reload();
        })
        .catch(error => {
          console.error('Error al eliminar la comida:', error);
        });
    } else {
      console.log('NO MANDO NADA');
    }
  }

  
}
