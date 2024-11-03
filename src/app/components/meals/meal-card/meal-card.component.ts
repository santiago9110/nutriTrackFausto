import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Food } from '../../../interfaces/food';
import { FoodContainerComponent } from '../../food-container/food-container.component';

@Component({
  selector: 'app-meal-card',
  standalone: true,
  imports: [FoodContainerComponent],
  templateUrl: './meal-card.component.html',
  styleUrl: './meal-card.component.css'
})
export class MealCardComponent {
  @Input() arrayFood?: Food[];
  @Output() deleteEmmiter = new EventEmitter();

  emitDelete(food: Food) {
    this.deleteEmmiter.emit(food);
  }
}
