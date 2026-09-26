import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exerc7 } from './exerc7';

describe('Exerc7', () => {
  let component: Exerc7;
  let fixture: ComponentFixture<Exerc7>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exerc7],
    }).compileComponents();

    fixture = TestBed.createComponent(Exerc7);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
