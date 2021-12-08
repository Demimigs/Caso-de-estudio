import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchrangeComponent } from './searchrange.component';

describe('SearchrangeComponent', () => {
  let component: SearchrangeComponent;
  let fixture: ComponentFixture<SearchrangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchrangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchrangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
