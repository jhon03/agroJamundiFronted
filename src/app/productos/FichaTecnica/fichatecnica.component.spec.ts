import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Finca1Component } from './fichatecnica.component';

describe('Finca1Component', () => {
  let component: Finca1Component;
  let fixture: ComponentFixture<Finca1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Finca1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Finca1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
