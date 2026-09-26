import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exerc8 } from './exerc8';

describe('Exerc8', () => {
  let component: Exerc8;
  let fixture: ComponentFixture<Exerc8>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exerc8],
    }).compileComponents();

    fixture = TestBed.createComponent(Exerc8);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
