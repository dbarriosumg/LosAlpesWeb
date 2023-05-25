import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SillasOutdoorComponent } from './sillas-outdoor.component';

describe('SillasOutdoorComponent', () => {
  let component: SillasOutdoorComponent;
  let fixture: ComponentFixture<SillasOutdoorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SillasOutdoorComponent]
    });
    fixture = TestBed.createComponent(SillasOutdoorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
