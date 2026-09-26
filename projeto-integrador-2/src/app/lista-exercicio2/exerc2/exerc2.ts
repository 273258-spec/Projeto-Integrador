import { Component } from '@angular/core';

@Component({
  selector: 'app-exerc2',
  standalone: false,
  templateUrl: './exerc2.html',
  styleUrl: './exerc2.css',
})
export class Exerc2 {
  usuarioLogado = false;

  alternarLogin(): void {
    this.usuarioLogado = !this.usuarioLogado;
  }
}
