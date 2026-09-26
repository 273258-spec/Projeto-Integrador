import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exerc6 } from './exerc6';

describe('Exerc6', () => {
  let component: Exerc6;
  let fixture: ComponentFixture<Exerc6>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exerc6],
    }).compileComponents();

    fixture = TestBed.createComponent(Exerc6);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
