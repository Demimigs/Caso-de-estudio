import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrangeComponent } from './crange.component';

describe('CrangeComponent', () => {
  let component: CrangeComponent;
  let fixture: ComponentFixture<CrangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
