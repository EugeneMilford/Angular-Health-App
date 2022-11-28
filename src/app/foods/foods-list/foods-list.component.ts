import { Component, OnInit } from '@angular/core';
import { Food } from '../food.model';

@Component({
  selector: 'app-foods-list',
  templateUrl: './foods-list.component.html',
  styleUrls: ['./foods-list.component.css']
})
export class FoodsListComponent implements OnInit {

  foods: Food[] = [
    new Food(
      'yogurt',
      'A great way to start the day',
      '07:00',
      'https://post.healthline.com/wp-content/uploads/2021/10/fruit-berries-yogurt-732x549-thumbnail.jpg')
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
