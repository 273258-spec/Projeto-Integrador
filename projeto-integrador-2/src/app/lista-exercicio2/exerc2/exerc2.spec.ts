import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exerc2 } from './exerc2';

describe('Exerc2', () => {
  let component: Exerc2;
  let fixture: ComponentFixture<Exerc2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exerc2],
    }).compileComponents();

    fixture = TestBed.createComponent(Exerc2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
