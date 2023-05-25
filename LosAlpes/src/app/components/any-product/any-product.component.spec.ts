import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnyProductComponent } from './any-product.component';

describe('AnyProductComponent', () => {
  let component: AnyProductComponent;
  let fixture: ComponentFixture<AnyProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnyProductComponent]
    });
    fixture = TestBed.createComponent(AnyProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
