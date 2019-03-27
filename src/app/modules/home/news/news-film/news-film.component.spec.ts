import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsFilmComponent } from './news-film.component';

describe('NewsFilmComponent', () => {
  let component: NewsFilmComponent;
  let fixture: ComponentFixture<NewsFilmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsFilmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
