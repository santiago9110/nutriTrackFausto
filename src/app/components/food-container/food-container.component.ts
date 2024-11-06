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
  @Input() foodRecived?: Food;
  @Output() foodClickEmitter = new EventEmitter();


  emitFoodClick() {
    this.foodClickEmitter.emit(this.foodRecived);
  }
}
