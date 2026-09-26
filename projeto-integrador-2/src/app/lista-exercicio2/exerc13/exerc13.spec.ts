import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exerc13 } from './exerc13';

describe('Exerc13', () => {
  let component: Exerc13;
  let fixture: ComponentFixture<Exerc13>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exerc13],
    }).compileComponents();

    fixture = TestBed.createComponent(Exerc13);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
