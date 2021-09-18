import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentFinderComponent } from './component-finder.component';

describe('ComponentFinderComponent', () => {
  let component: ComponentFinderComponent;
  let fixture: ComponentFixture<ComponentFinderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentFinderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
