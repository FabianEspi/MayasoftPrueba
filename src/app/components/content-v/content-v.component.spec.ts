import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentVComponent } from './content-v.component';

describe('ContentVComponent', () => {
  let component: ContentVComponent;
  let fixture: ComponentFixture<ContentVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentVComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
