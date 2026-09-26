import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exerc15 } from './exerc15';

describe('Exerc15', () => {
  let component: Exerc15;
  let fixture: ComponentFixture<Exerc15>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exerc15],
    }).compileComponents();

    fixture = TestBed.createComponent(Exerc15);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
