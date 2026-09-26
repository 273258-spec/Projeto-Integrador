import { Component } from '@angular/core';

interface Produto {
  id: number; 
  nome: string; 
  preco: number; 
  quantidade: number; 
  promocao: boolean;
}


@Component({
  selector: 'app-exerc10',
  standalone: false,
  templateUrl: './exerc10.html',
  styleUrl: './exerc10.css',
})
export class Exerc10 {
  produtos: Produto[] = [
    { id: 1, nome: 'Teclado', preco: 150, quantidade: 10, promocao: false },
    { id: 2, nome: 'Mouse', preco: 80, quantidade: 5, promocao: false },
    { id: 3, nome: 'Monitor', preco: 900, quantidade: 3, promocao: false },
    { id: 4, nome: 'Headset', preco: 200, quantidade: 0, promocao: false },
    { id: 5, nome: 'Webcam', preco: 250, quantidade: 7, promocao: false }
  ];

  alternarPromocao(p: Produto): void {
  p.promocao = !p.promocao;
}
}
