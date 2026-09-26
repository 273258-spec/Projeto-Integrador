import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exerc9 } from './exerc9';

describe('Exerc9', () => {
  let component: Exerc9;
  let fixture: ComponentFixture<Exerc9>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exerc9],
    }).compileComponents();

    fixture = TestBed.createComponent(Exerc9);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
