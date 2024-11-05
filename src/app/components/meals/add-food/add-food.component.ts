import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AlimentosComponent } from "../../../pages/alimentos/alimentos.component";
import { BarraBuscadoraComidasComponent } from "../../barra-buscadora-comidas/barra-buscadora-comidas.component";
import { FoodApiService } from '../../../services/food-api.service';
import { Food } from '../../../interfaces/food';
import { FoodContainerComponent } from '../../food-container/food-container.component';

@Component({
  selector: 'app-add-food',
  standalone: true,
  imports: [AlimentosComponent, BarraBuscadoraComidasComponent, FoodContainerComponent],
  templateUrl: './add-food.component.html',
  styleUrl: './add-food.component.css'
})
export class AddFoodComponent {
  foodRecived?: string;
  arrayFoods: Food[] | null = null;

  constructor(private _foodService: FoodApiService) { }

  foodReciver(food: string) {
    this._foodService.getFoods(food).subscribe(data => {
      this.arrayFoods = data;
    })
  }


}
