import { Component } from '@angular/core';

@Component({
  selector: 'app-exerc3',
  standalone: false,
  templateUrl: './exerc3.html',
  styleUrl: './exerc3.css',
})
export class Exerc3 {
   idade = 0;

  aumentarIdade(): void {
    this.idade++;
  }

  diminuirIdade(): void {
    if (this.idade > 0) this.idade--;
  }
}
