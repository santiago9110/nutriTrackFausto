import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Food } from '../../interfaces/food';
import { CommonModule, NgIf } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-food-container',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './food-container.component.html',
  styleUrl: './food-container.component.css'
})
export class FoodContainerComponent {
  @Input() foodRecived: Food = { id: 0, name: '', caloriesPerGram: 0, carbohydrates: 0, proteins: 0, fats: 0, gramQuantity: 0, foodType: '' };
  @Output() foodClickEmitter = new EventEmitter();
  @Input() editMode?: boolean;

  foodCargada: Food = { id: 0, name: '', caloriesPerGram: 0, carbohydrates: 0, proteins: 0, fats: 0, gramQuantity: 0, foodType: '' }


  gramQuantity?: number = 100;

  emitFoodClick() {
    this.foodClickEmitter.emit(this.foodRecived);
  }
}
