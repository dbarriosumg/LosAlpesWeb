import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SofasCamasComponent } from './sofas-camas.component';

describe('SofasCamasComponent', () => {
  let component: SofasCamasComponent;
  let fixture: ComponentFixture<SofasCamasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SofasCamasComponent]
    });
    fixture = TestBed.createComponent(SofasCamasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
