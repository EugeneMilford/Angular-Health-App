import { Component, OnInit } from '@angular/core';
import { Sleep } from '../sleep.model';

@Component({
  selector: 'app-sleep-schedule',
  templateUrl: './sleep-schedule.component.html',
  styleUrls: ['./sleep-schedule.component.css']
})
export class SleepScheduleComponent implements OnInit {

  sleep: Sleep[] = [
    new Sleep('21:00', '06:00', '9 hrs')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
