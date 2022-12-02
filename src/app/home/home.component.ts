import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  imgMain = 'assets/images/main.jpg'

  imgAbout = 'assets/images/about.jpg'

  imgFood = 'assets/images/food1.jpg'
  imgExercise = 'assets/images/exercise1.jpg'
  imgSleep = 'assets/images/sleep1.jpg'

  constructor() { }

  ngOnInit(): void {
  }

}
