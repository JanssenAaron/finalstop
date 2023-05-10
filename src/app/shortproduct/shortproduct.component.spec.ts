import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortproductComponent } from './shortproduct.component';

describe('ShortproductComponent', () => {
  let component: ShortproductComponent;
  let fixture: ComponentFixture<ShortproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShortproductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShortproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
