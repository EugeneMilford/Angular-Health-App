import { Component, OnInit } from '@angular/core';
import { Sleep } from '../sleep.model';
import { SleepService } from '../sleep.service';

@Component({
  selector: 'app-sleep-schedule',
  templateUrl: './sleep-schedule.component.html',
  styleUrls: ['./sleep-schedule.component.css']
})
export class SleepScheduleComponent implements OnInit {

  sleep: Sleep[];

  constructor(private sleepService: SleepService) { }

  ngOnInit(): void {
    this.sleep = this.sleepService.getSleep();
  }

}
