import { Component } from '@angular/core';
import { NavBarComponent } from "../../sharedComponents/nav-bar/nav-bar.component";
import { AddFoodComponent } from "../../components/meals/add-food/add-food.component";

@Component({
  selector: 'app-add-food-to-meal',
  standalone: true,
  imports: [NavBarComponent, AddFoodComponent],
  templateUrl: './add-food-to-meal.component.html',
  styleUrl: './add-food-to-meal.component.css'
})
export class AddFoodToMealComponent {

}
