import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoAgricolasComponent } from './producto-agricolas.component';

describe('ProductoAgricolasComponent', () => {
  let component: ProductoAgricolasComponent;
  let fixture: ComponentFixture<ProductoAgricolasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductoAgricolasComponent]
    });
    fixture = TestBed.createComponent(ProductoAgricolasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
