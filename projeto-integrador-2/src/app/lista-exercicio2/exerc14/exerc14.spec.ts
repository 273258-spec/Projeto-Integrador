import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exerc14 } from './exerc14';

describe('Exerc14', () => {
  let component: Exerc14;
  let fixture: ComponentFixture<Exerc14>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exerc14],
    }).compileComponents();

    fixture = TestBed.createComponent(Exerc14);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
