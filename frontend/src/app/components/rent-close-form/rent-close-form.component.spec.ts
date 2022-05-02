import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentCloseFormComponent } from './rent-close-form.component';

describe('RentCloseFormComponent', () => {
  let component: RentCloseFormComponent;
  let fixture: ComponentFixture<RentCloseFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentCloseFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentCloseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
