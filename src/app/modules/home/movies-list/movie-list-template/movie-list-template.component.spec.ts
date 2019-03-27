import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieListTemplateComponent } from './movie-list-template.component';

describe('MovieListTemplateComponent', () => {
  let component: MovieListTemplateComponent;
  let fixture: ComponentFixture<MovieListTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieListTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieListTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
