import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderspopupComponent } from './orderspopup.component';

describe('OrderspopupComponent', () => {
  let component: OrderspopupComponent;
  let fixture: ComponentFixture<OrderspopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderspopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderspopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
