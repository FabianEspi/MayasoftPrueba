import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesPersonasComponent } from './clientes-personas.component';

describe('ClientesPersonasComponent', () => {
  let component: ClientesPersonasComponent;
  let fixture: ComponentFixture<ClientesPersonasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientesPersonasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientesPersonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
