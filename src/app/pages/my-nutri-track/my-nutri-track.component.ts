import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from "../../sharedComponents/nav-bar/nav-bar.component";
import { MealListComponent } from "../../components/meals/meal-list/meal-list.component";
import { BarraBuscadoraComidasComponent } from '../../components/barra-buscadora-comidas/barra-buscadora-comidas.component';
import { FoodContainerComponent } from '../../components/food-container/food-container.component';
import { FoodApiService } from '../../services/food-api.service';
import { Food } from '../../interfaces/food';
import { FormsModule } from '@angular/forms';
import { MealsService } from '../../services/meals.service';

@Component({
  selector: 'app-my-nutri-track',
  standalone: true,
  imports: [NavBarComponent, MealListComponent, BarraBuscadoraComidasComponent, FoodContainerComponent, FormsModule],
  templateUrl: './my-nutri-track.component.html',
  styleUrl: './my-nutri-track.component.css'
})
export class MyNutriTrackComponent {
  addMode = false; //muestra o no el modo add-food
  arrayFoods?: Food[]; //array food q se usa en el addMode
  foodToAdd?: Food; //comida seleccionada para agregar
  foodQuantity: number = 0; //cantidad de comida seleccionada para agregar
  mealTypeRecived?: 'breakfast' | 'lunch' | 'snack' | 'dinner'; //mealType q se recibe de meal-list
  mealIdRecived?: number; //mealId que se recibe del meal-list

  constructor(private _myFoodService: FoodApiService, private _myMealService: MealsService) { }

  //llena el arrayFoods de todas las foods que coinciden con el foodName que se ingreso en el componenteBuscador
  foodNameReciver(foodName: string) {
    this._myFoodService.getFoods(foodName).subscribe(data => {
      this.arrayFoods = data;
    })
  }

  //recibe la food seleccionada y le asigna la cantidad de gramos que se eligieron
  foodReciver(foodSelected: Food) {
    this.foodToAdd = foodSelected
    this.foodToAdd.gramQuantity = this.foodQuantity;
  }

  //recibe de meal-list la mealType
  mealTypeReciver(mealType: 'breakfast' | 'lunch' | 'snack' | 'dinner') {
    this.mealTypeRecived = mealType;
  }

  //recibe de meal-list la mealId
  mealIdReciver(mealId: number) {
    this.mealIdRecived = mealId;
  }

  //activa o desactiva el add-food-mode
  changeAddMode() {
    this.addMode = !this.addMode;
  }

  //agrega la comida seleccionada a la meal que seleccionamos
  addFoodToMeal() {
    this._myMealService.addFoodToMeal(this.mealIdRecived, this.foodToAdd, this.mealTypeRecived).subscribe();
  }

}
