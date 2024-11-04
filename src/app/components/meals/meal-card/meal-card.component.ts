import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Food } from '../../../interfaces/food';
import { FoodContainerComponent } from '../../food-container/food-container.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-meal-card',
  standalone: true,
  imports: [FoodContainerComponent, NgClass],
  templateUrl: './meal-card.component.html',
  styleUrl: './meal-card.component.css'
})
export class MealCardComponent {
  @Input() arrayFood?: Food[];
  @Output() deleteEmmiter = new EventEmitter();
  isExpanded = false; // Estado del despliegue

  emitDelete(food: Food) {
    this.deleteEmmiter.emit(food);
  }

  toggleExpand() {
    this.isExpanded = !this.isExpanded;
  }
}
