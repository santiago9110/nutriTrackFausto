import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Food } from '../../interfaces/food';

@Component({
  selector: 'app-food-container',
  standalone: true,
  imports: [],
  templateUrl: './food-container.component.html',
  styleUrl: './food-container.component.css'
})
export class FoodContainerComponent {
  @Input() foodRecived?:Food;
  @Output() foodClickEmitter = new EventEmitter();

  emitFoodClick(){
    this.foodClickEmitter.emit(this.foodRecived);
  }
}
