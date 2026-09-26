import { Component } from '@angular/core';

interface Produto {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
  promocao: boolean;
}

@Component({
  selector: 'app-exerc9',
  standalone: false,
  templateUrl: './exerc9.html',
  styleUrl: './exerc9.css',
})
export class Exerc9 {

 produtos: Produto[] = [
    { id: 1, nome: 'Teclado', preco: 150, quantidade: 10, promocao: false },
    { id: 2, nome: 'Mouse', preco: 80, quantidade: 5, promocao: false },
    { id: 3, nome: 'Monitor', preco: 900, quantidade: 3, promocao: false },
    { id: 4, nome: 'Headset', preco: 200, quantidade: 0, promocao: false },
    { id: 5, nome: 'Webcam', preco: 250, quantidade: 7, promocao: false }
  ];

  classeEstoque(p: Produto): string {
  if (p.quantidade === 0) return 'sem-estoque';
  if (p.quantidade <= 5) return 'estoque-baixo';
  return 'estoque-disponivel';
}

textoEstoque(p: Produto): string {
  if (p.quantidade === 0) return 'Sem estoque';
  if (p.quantidade <= 5) return 'Estoque baixo';
  return 'Estoque disponível';
}
}
