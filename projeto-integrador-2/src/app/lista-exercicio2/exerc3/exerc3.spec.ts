import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exerc3 } from './exerc3';

describe('Exerc3', () => {
  let component: Exerc3;
  let fixture: ComponentFixture<Exerc3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exerc3],
    }).compileComponents();

    fixture = TestBed.createComponent(Exerc3);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
