import { Component, Input } from '@angular/core';
import { Food } from '../../interfaces/food';

@Component({
  selector: 'app-food-detail',
  standalone: true,
  imports: [],
  templateUrl: './food-detail.component.html',
  styleUrl: './food-detail.component.css'
})
export class FoodDetailComponent {
  @Input() foodRecived?: Food;
}
