import { Component, OnInit } from '@angular/core';
import { SleepService } from './sleep.service';

@Component({
  selector: 'app-sleep',
  templateUrl: './sleep.component.html',
  styleUrls: ['./sleep.component.css'],
  providers: [SleepService]
})
export class SleepComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
