import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesManagementComponent } from './movies-management.component';

describe('MoviesManagementComponent', () => {
  let component: MoviesManagementComponent;
  let fixture: ComponentFixture<MoviesManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
