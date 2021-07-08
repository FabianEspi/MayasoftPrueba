import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosempComponent } from './productosemp.component';

describe('ProductosempComponent', () => {
  let component: ProductosempComponent;
  let fixture: ComponentFixture<ProductosempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductosempComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
