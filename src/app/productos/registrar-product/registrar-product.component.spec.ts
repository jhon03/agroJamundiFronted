import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarProductComponent } from './registrar-product.component';

describe('RegistrarProductComponent', () => {
  let component: RegistrarProductComponent;
  let fixture: ComponentFixture<RegistrarProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
