import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloverComponent } from './clover.component';

describe('CloverComponent', () => {
  let component: CloverComponent;
  let fixture: ComponentFixture<CloverComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CloverComponent]
    });
    fixture = TestBed.createComponent(CloverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
