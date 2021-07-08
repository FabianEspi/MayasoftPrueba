import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsProductoComponent } from './cards-producto.component';

describe('CardsProductoComponent', () => {
  let component: CardsProductoComponent;
  let fixture: ComponentFixture<CardsProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsProductoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
