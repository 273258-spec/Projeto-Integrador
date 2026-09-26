import { Component } from '@angular/core';

interface Projeto {
  id: number;
  titulo: string;
  equipe: string;
  nota: number | null;
  status: 'planejamento' | 'desenvolvimento' | 'testes' | 'concluido';
  entregue: boolean;
}

@Component({
  selector: 'app-exerc15',
  standalone: false,
  templateUrl: './exerc15.html',
  styleUrl: './exerc15.css',
})
export class Exerc15 {
   projetos: Projeto[] = [
    { id: 1, titulo: 'Sistema de Vendas', equipe: 'Equipe A', nota: 8.5, status: 'concluido', entregue: true },
    { id: 2, titulo: 'App de Delivery', equipe: 'Equipe B', nota: 5.2, status: 'testes', entregue: false },
    { id: 3, titulo: 'Portal Acadêmico', equipe: 'Equipe C', nota: null, status: 'desenvolvimento', entregue: false },
    { id: 4, titulo: 'Sistema de Estoque', equipe: 'Equipe D', nota: 7.0, status: 'planejamento', entregue: false },
    { id: 5, titulo: 'App de Finanças', equipe: 'Equipe E', nota: 4.8, status: 'testes', entregue: false }
  ];

  mostrarConcluidos = true;

  get totalProjetos(): number {
    return this.projetos.length;
  }

  get totalConcluidos(): number {
    return this.projetos.filter(p => p.status === 'concluido').length;
  }

  alterarStatus(projeto: Projeto, novoStatus: string): void {
    projeto.status = novoStatus as Projeto['status'];
  }
}
