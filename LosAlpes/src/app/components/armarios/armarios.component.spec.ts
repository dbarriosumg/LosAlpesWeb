import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmariosComponent } from './armarios.component';

describe('ArmariosComponent', () => {
  let component: ArmariosComponent;
  let fixture: ComponentFixture<ArmariosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArmariosComponent]
    });
    fixture = TestBed.createComponent(ArmariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
