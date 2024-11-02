import { Component } from '@angular/core';
import { NavBarComponent } from "../../sharedComponents/nav-bar/nav-bar.component";
import { BarraBuscadoraComidasComponent } from "../../components/barra-buscadora-comidas/barra-buscadora-comidas.component";
import { FoodContainerComponent } from "../../components/food-container/food-container.component";
import { Food } from '../../interfaces/food';
import { FoodApiService } from '../../services/food-api.service';
import { FoodDetailComponent } from '../../components/food-detail/food-detail.component';

@Component({
  selector: 'app-alimentos',
  standalone: true,
  imports: [NavBarComponent, BarraBuscadoraComidasComponent, FoodContainerComponent, FoodDetailComponent],
  templateUrl: './alimentos.component.html',
  styleUrl: './alimentos.component.css'
})
export class AlimentosComponent {
  foodNameRecived?: string;
  arrayFoods?: Food[];
  foodSelected?:Food;
  allFood = true;
  oneFood = false;

  constructor(private _foodApi: FoodApiService) { }

  reciveFoodName(foodName: string) {
    this._foodApi.getFoods(foodName).subscribe(data => {
      this.arrayFoods = data;
    })
  }

  foodReciber(food:Food){
    this.foodSelected = food;
    this.allFood = false;
    this.oneFood = true;
  }

  changeMode(){
    this.allFood = true;
    this.oneFood = false;
  }
}
