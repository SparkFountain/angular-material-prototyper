import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePrototypeDialogComponent } from './create-prototype-dialog.component';

describe('CreatePrototypeDialogComponent', () => {
  let component: CreatePrototypeDialogComponent;
  let fixture: ComponentFixture<CreatePrototypeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePrototypeDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePrototypeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
