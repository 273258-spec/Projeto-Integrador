import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exerc4 } from './exerc4';

describe('Exerc4', () => {
  let component: Exerc4;
  let fixture: ComponentFixture<Exerc4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exerc4],
    }).compileComponents();

    fixture = TestBed.createComponent(Exerc4);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
