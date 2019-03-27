import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsPromotionComponent } from './news-promotion.component';

describe('NewsPromotionComponent', () => {
  let component: NewsPromotionComponent;
  let fixture: ComponentFixture<NewsPromotionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsPromotionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsPromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
