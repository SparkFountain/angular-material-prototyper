import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenPrototypeDialogComponent } from './open-prototype-dialog.component';

describe('OpenPrototypeDialogComponent', () => {
  let component: OpenPrototypeDialogComponent;
  let fixture: ComponentFixture<OpenPrototypeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenPrototypeDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenPrototypeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
