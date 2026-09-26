import { Component } from '@angular/core';

interface Produto {
  id: number;
  nome: string;
  quantidade: number;
}

@Component({
  selector: 'app-exerc12',
  standalone: false,
  templateUrl: './exerc12.html',
  styleUrl: './exerc12.css',
})
export class Exerc12 {
   produtos: Produto[] = [
    { id: 1, nome: 'Teclado', quantidade: 10 },
    { id: 2, nome: 'Mouse', quantidade: 5 },
    { id: 3, nome: 'Monitor', quantidade: 3 }
  ];

  novoNome = '';
  novaQuantidade: number | null = null;
  mensagemErro = '';

  cadastrar(): void {
    if (!this.novoNome.trim()) {
      this.mensagemErro = 'Informe o nome do produto.';
      return;
    }

    if (this.novaQuantidade === null || this.novaQuantidade < 0) {
      this.mensagemErro = 'Informe uma quantidade válida (maior ou igual a zero).';
      return;
    }

    const novoId = this.produtos.length > 0
      ? Math.max(...this.produtos.map(p => p.id)) + 1
      : 1;

    this.produtos.push({
      id: novoId,
      nome: this.novoNome,
      quantidade: this.novaQuantidade
    });

    this.novoNome = '';
    this.novaQuantidade = null;
    this.mensagemErro = '';
  }

  excluir(produto: Produto): void {
    this.produtos = this.produtos.filter(p => p.id !== produto.id);
  }
}
