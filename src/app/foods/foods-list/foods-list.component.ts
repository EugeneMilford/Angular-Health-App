import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Food } from '../food.model';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-foods-list',
  templateUrl: './foods-list.component.html',
  styleUrls: ['./foods-list.component.css']
})
export class FoodsListComponent implements OnInit {

  @Output() foodWasSelected = new EventEmitter<Food>();
  foods: Food[];


  constructor(private foodService: FoodService) {
  }

  ngOnInit(): void {
    this.foods = this.foodService.getFoods();
  }

  onFoodSelected(food: Food) {
    this.foodWasSelected.emit(food);
  }

}
