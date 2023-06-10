import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsgoskinsComponent } from './csgoskins.component';

describe('CsgoskinsComponent', () => {
  let component: CsgoskinsComponent;
  let fixture: ComponentFixture<CsgoskinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsgoskinsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsgoskinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
