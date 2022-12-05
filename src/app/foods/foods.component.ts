import { Component, OnInit } from '@angular/core';
import { Food } from './food.model';
import { FoodService } from './food.service';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.css'],
  providers: [FoodService]
})
export class FoodsComponent implements OnInit {

  selectedFood: Food;

  constructor() { }

  ngOnInit(): void {
  }

}
