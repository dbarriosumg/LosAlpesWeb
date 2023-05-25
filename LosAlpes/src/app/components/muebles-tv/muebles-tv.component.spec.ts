import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MueblesTvComponent } from './muebles-tv.component';

describe('MueblesTvComponent', () => {
  let component: MueblesTvComponent;
  let fixture: ComponentFixture<MueblesTvComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MueblesTvComponent]
    });
    fixture = TestBed.createComponent(MueblesTvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
