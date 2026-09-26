import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exerc5 } from './exerc5';

describe('Exerc5', () => {
  let component: Exerc5;
  let fixture: ComponentFixture<Exerc5>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exerc5],
    }).compileComponents();

    fixture = TestBed.createComponent(Exerc5);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
