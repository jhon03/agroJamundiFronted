import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearAgricultorComponent } from './crear-agricultor.component';

describe('CrearAgricultorComponent', () => {
  let component: CrearAgricultorComponent;
  let fixture: ComponentFixture<CrearAgricultorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearAgricultorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearAgricultorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
