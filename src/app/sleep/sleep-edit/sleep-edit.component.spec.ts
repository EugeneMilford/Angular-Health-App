import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SleepEditComponent } from './sleep-edit.component';

describe('SleepEditComponent', () => {
  let component: SleepEditComponent;
  let fixture: ComponentFixture<SleepEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SleepEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SleepEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
