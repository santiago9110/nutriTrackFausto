import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Food } from '../../../interfaces/food';
import { FoodContainerComponent } from '../../food-container/food-container.component';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-meal-card',
  standalone: true,
  imports: [FoodContainerComponent, NgClass, NgIf],
  templateUrl: './meal-card.component.html',
  styleUrl: './meal-card.component.css'
})
export class MealCardComponent {
  @Input() arrayFood?: Food[]; //array de comidas que renderiza
  @Output() deleteEmmiter = new EventEmitter(); //envia el evento del delete para meal list
  @Input() mealType?: 'breakfast' | 'lunch' | 'snack' | 'dinner'; //recibe el mealtype
  @Output() mealTypeEmitter = new EventEmitter(); //envia el mealType a meal list
  @Output() addModeEmmiter = new EventEmitter(); //envia el addMode event a meal list

  isExpanded = false;

  emitDelete(food: Food) {
    this.deleteEmmiter.emit(food);
  }

  emitMealType() {
    this.mealTypeEmitter.emit(this.mealType);
  }

  emitAddMode() {
    this.addModeEmmiter.emit();
  }

  toggleExpand() {
    this.isExpanded = !this.isExpanded;
  }
}
