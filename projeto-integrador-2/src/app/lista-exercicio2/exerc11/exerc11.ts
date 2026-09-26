import { Component } from '@angular/core';

interface Produto {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
}


@Component({
  selector: 'app-exerc11',
  standalone: false,
  templateUrl: './exerc11.html',
  styleUrl: './exerc11.css',
})
export class Exerc11 {
 produtos: Produto[] = [
    { id: 1, nome: 'Teclado', preco: 150, quantidade: 10 },
    { id: 2, nome: 'Mouse', preco: 80, quantidade: 5 },
    { id: 3, nome: 'Monitor', preco: 900, quantidade: 3 },
    { id: 4, nome: 'Headset', preco: 200, quantidade: 0 },
    { id: 5, nome: 'Webcam', preco: 250, quantidade: 7 }
  ];

  somenteDisponiveis = false;
}
