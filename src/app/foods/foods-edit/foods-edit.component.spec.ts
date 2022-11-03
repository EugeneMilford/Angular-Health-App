import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodsEditComponent } from './foods-edit.component';

describe('FoodsEditComponent', () => {
  let component: FoodsEditComponent;
  let fixture: ComponentFixture<FoodsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodsEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
