import { Component } from '@angular/core';

@Component({
  selector: 'app-exerc1',
  standalone: false,
  templateUrl: './exerc1.html',
  styleUrl: './exerc1.css',
})
export class Exerc1 {
  mensagemVisivel = false;

  alternarMensagem(): void {
    this.mensagemVisivel = !this.mensagemVisivel;
  }
}
