import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exerc10 } from './exerc10';

describe('Exerc10', () => {
  let component: Exerc10;
  let fixture: ComponentFixture<Exerc10>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exerc10],
    }).compileComponents();

    fixture = TestBed.createComponent(Exerc10);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
