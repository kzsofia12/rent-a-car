import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentCloseDialogComponent } from './rent-close-dialog.component';

describe('RentCloseDialogComponent', () => {
  let component: RentCloseDialogComponent;
  let fixture: ComponentFixture<RentCloseDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentCloseDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentCloseDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
