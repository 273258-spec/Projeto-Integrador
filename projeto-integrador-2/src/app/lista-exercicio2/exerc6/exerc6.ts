import { Component } from '@angular/core';

@Component({
  selector: 'app-exerc6',
  standalone: false,
  templateUrl: './exerc6.html',
  styleUrl: './exerc6.css',
})
export class Exerc6 {
   nomesIniciais = ['Isa', 'Vitoria', 'Isabella', 'Nicolas', 'Gabriel', 'Lucas', 'Matheus', 'Rafael', 'Guilherme', 'Felipe'];
  nomes = [...this.nomesIniciais];

  removerUltimo(): void {
    this.nomes.pop();
  }

  limparLista(): void {
    this.nomes = [];
  }

  restaurarLista(): void {
    this.nomes = [...this.nomesIniciais];
  }
}
