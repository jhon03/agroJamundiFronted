import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilAgricultorComponent } from './perfil-agricultor.component';

describe('PerfilAgricultorComponent', () => {
  let component: PerfilAgricultorComponent;
  let fixture: ComponentFixture<PerfilAgricultorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilAgricultorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilAgricultorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
