import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabSearchMovieComponent } from './tab-search-movie.component';

describe('TabSearchMovieComponent', () => {
  let component: TabSearchMovieComponent;
  let fixture: ComponentFixture<TabSearchMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabSearchMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabSearchMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
