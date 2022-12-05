import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodsItemComponent } from './foods-item.component';

describe('FoodsItemComponent', () => {
  let component: FoodsItemComponent;
  let fixture: ComponentFixture<FoodsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodsItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
