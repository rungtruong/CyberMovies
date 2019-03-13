import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChitietphimComponent } from './chitietphim.component';

describe('ChitietphimComponent', () => {
  let component: ChitietphimComponent;
  let fixture: ComponentFixture<ChitietphimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChitietphimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChitietphimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
