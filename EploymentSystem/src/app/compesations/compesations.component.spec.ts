import { ComponentFixture, TestBed } from '@angular/core/testing';

import { compesationsComponent } from './compesations.component';

describe('compesationsComponent', () => {
  let component: compesationsComponent;
  let fixture: ComponentFixture<compesationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ compesationsComponent ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(compesationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('shouldcreate', () => {
    expect(component).toBeTruthy();
  });
});
