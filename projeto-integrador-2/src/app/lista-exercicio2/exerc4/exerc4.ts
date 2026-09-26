import { Component } from '@angular/core';

@Component({
  selector: 'app-exerc4',
  standalone: false,
  templateUrl: './exerc4.html',
  styleUrl: './exerc4.css',
})
export class Exerc4 {
  nomeProduto = 'Teclado';
  quantidadeEstoque = 5;

  adicionar(): void {
    this.quantidadeEstoque++;
  }

  remover(): void {
    if (this.quantidadeEstoque > 0) this.quantidadeEstoque--;
  }
}
