import { Component } from '@angular/core';
import { NavBarComponent } from "../../sharedComponents/nav-bar/nav-bar.component";
import { MealListComponent } from "../../components/meals/meal-list/meal-list.component";

@Component({
  selector: 'app-my-nutri-track',
  standalone: true,
  imports: [NavBarComponent, MealListComponent],
  templateUrl: './my-nutri-track.component.html',
  styleUrl: './my-nutri-track.component.css'
})
export class MyNutriTrackComponent {

}
