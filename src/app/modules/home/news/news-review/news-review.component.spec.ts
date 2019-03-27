import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsReviewComponent } from './news-review.component';

describe('NewsReviewComponent', () => {
  let component: NewsReviewComponent;
  let fixture: ComponentFixture<NewsReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
