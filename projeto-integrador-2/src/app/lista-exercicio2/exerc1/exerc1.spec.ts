import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exerc1 } from './exerc1';

describe('Exerc1', () => {
  let component: Exerc1;
  let fixture: ComponentFixture<Exerc1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exerc1],
    }).compileComponents();

    fixture = TestBed.createComponent(Exerc1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
