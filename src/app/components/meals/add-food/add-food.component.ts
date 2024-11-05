import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AlimentosComponent } from "../../../pages/alimentos/alimentos.component";
import { BarraBuscadoraComidasComponent } from "../../barra-buscadora-comidas/barra-buscadora-comidas.component";
import { FoodApiService } from '../../../services/food-api.service';
import { Food } from '../../../interfaces/food';

@Component({
  selector: 'app-add-food',
  standalone: true,
  imports: [AlimentosComponent, BarraBuscadoraComidasComponent],
  templateUrl: './add-food.component.html',
  styleUrl: './add-food.component.css'
})
export class AddFoodComponent implements OnInit {
  foodRecived?: string;
  arrayFoods?: Food[];

  constructor(private _foodService: FoodApiService) { }

  ngOnInit(): void {
    this._foodService.getFoods().subscribe(data => {
      this.arrayFoods = data;
    })
  }

  foodReciver(food: string) {
    this.foodRecived = food;
  }
}
