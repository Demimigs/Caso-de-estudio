import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmonthComponent } from './cmonth.component';

describe('CmonthComponent', () => {
  let component: CmonthComponent;
  let fixture: ComponentFixture<CmonthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmonthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
