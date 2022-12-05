import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Food } from '../food.model';

@Component({
  selector: 'app-foods-detail',
  templateUrl: './foods-detail.component.html',
  styleUrls: ['./foods-detail.component.css']
})
export class FoodsDetailComponent implements OnInit {

  @Input() foo: Food;
  @Output() foodSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelected() {
    this.foodSelected.emit();
  
 }

}
