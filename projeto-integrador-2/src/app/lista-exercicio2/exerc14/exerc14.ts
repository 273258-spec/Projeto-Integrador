import { Component } from '@angular/core';

@Component({
  selector: 'app-exerc14',
  standalone: false,
  templateUrl: './exerc14.html',
  styleUrl: './exerc14.css',
})
export class Exerc14 {
  usuarioLogado = false;

  alternarLogin(): void {
    this.usuarioLogado = !this.usuarioLogado;
  }

  nomes = ['Isa', 'Vitoria', 'Isabella', 'Nicolas', 'Gabriel', 'Lucas', 'Matheus', 'Rafael', 'Guilherme', 'Felipe'];
  
  nomesIniciais = ['Isa', 'Vitoria', 'Isabella', 'Nicolas', 'Gabriel', 'Lucas', 'Matheus', 'Rafael', 'Guilherme', 'Felipe'];
  nomesRemoviveis = [...this.nomesIniciais];

  removerUltimo(): void {
    this.nomesRemoviveis.pop();
  }

  limparLista(): void {
    this.nomesRemoviveis = [];
  }

  restaurarLista(): void {
    this.nomesRemoviveis = [...this.nomesIniciais];
  }
}
