import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exerc12 } from './exerc12';

describe('Exerc12', () => {
  let component: Exerc12;
  let fixture: ComponentFixture<Exerc12>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exerc12],
    }).compileComponents();

    fixture = TestBed.createComponent(Exerc12);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
