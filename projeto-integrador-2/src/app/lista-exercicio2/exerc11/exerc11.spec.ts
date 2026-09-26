import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exerc11 } from './exerc11';

describe('Exerc11', () => {
  let component: Exerc11;
  let fixture: ComponentFixture<Exerc11>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exerc11],
    }).compileComponents();

    fixture = TestBed.createComponent(Exerc11);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
