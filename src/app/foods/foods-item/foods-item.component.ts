import { Component, Input, OnInit } from '@angular/core';
import { Food } from '../food.model';

@Component({
  selector: 'app-foods-item',
  templateUrl: './foods-item.component.html',
  styleUrls: ['./foods-item.component.css']
})
export class FoodsItemComponent implements OnInit {
  @Input() food: Food;

  constructor() { }

  ngOnInit(): void {
  }

}
