import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesasOutdoorComponent } from './mesas-outdoor.component';

describe('MesasOutdoorComponent', () => {
  let component: MesasOutdoorComponent;
  let fixture: ComponentFixture<MesasOutdoorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MesasOutdoorComponent]
    });
    fixture = TestBed.createComponent(MesasOutdoorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
