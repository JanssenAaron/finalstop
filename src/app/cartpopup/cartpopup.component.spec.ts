import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartpopupComponent } from './cartpopup.component';

describe('CartpopupComponent', () => {
  let component: CartpopupComponent;
  let fixture: ComponentFixture<CartpopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartpopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
