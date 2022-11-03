import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SleepScheduleComponent } from './sleep-schedule.component';

describe('SleepScheduleComponent', () => {
  let component: SleepScheduleComponent;
  let fixture: ComponentFixture<SleepScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SleepScheduleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SleepScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
