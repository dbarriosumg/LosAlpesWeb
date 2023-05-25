import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SillasComponent } from './sillas.component';

describe('SillasComponent', () => {
  let component: SillasComponent;
  let fixture: ComponentFixture<SillasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SillasComponent]
    });
    fixture = TestBed.createComponent(SillasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
