import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayMovieTrailerComponent } from './play-movie-trailer.component';

describe('PlayMovieTrailerComponent', () => {
  let component: PlayMovieTrailerComponent;
  let fixture: ComponentFixture<PlayMovieTrailerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayMovieTrailerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayMovieTrailerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
