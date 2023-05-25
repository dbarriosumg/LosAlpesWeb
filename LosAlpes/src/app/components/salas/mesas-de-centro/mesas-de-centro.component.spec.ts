import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesasDeCentroComponent } from './mesas-de-centro.component';

describe('MesasDeCentroComponent', () => {
  let component: MesasDeCentroComponent;
  let fixture: ComponentFixture<MesasDeCentroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MesasDeCentroComponent]
    });
    fixture = TestBed.createComponent(MesasDeCentroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
