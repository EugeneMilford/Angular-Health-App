import { Component, OnInit } from '@angular/core';
import { Exercise } from '../exercise.model';

@Component({
  selector: 'app-exercise-schedule',
  templateUrl: './exercise-schedule.component.html',
  styleUrls: ['./exercise-schedule.component.css']
})
export class ExerciseScheduleComponent implements OnInit {

  exercise: Exercise[] = [
    new Exercise('jogging','A great cardio workout','06:20','06:40', '20min')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
