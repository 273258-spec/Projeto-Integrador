import { Component } from '@angular/core';

interface Tarefa {
  id: number;
  titulo: string;
  responsavel: string;
  prioridade: 'baixa' | 'media' | 'alta';
  concluida: boolean;
}

@Component({
  selector: 'app-exerc13',
  standalone: false,
  templateUrl: './exerc13.html',
  styleUrl: './exerc13.css',
})
export class Exerc13 {
  tarefas: Tarefa[] = [
    { id: 1, titulo: 'Levantamento de requisitos', responsavel: 'Isabelly', prioridade: 'alta', concluida: true },
    { id: 2, titulo: 'Modelagem do banco', responsavel: 'Isabella', prioridade: 'media', concluida: false },
    { id: 3, titulo: 'Criar layout', responsavel: 'Vitoria', prioridade: 'baixa', concluida: false },
    { id: 4, titulo: 'Implementar login', responsavel: 'Nicolas', prioridade: 'alta', concluida: false },
    { id: 5, titulo: 'Testes unitários', responsavel: 'Eduardo', prioridade: 'media', concluida: true },
    { id: 6, titulo: 'Documentação', responsavel: 'Fernanda', prioridade: 'baixa', concluida: false }
  ];

  get totalTarefas(): number {
    return this.tarefas.length;
  }

  get totalConcluidas(): number {
    return this.tarefas.filter(t => t.concluida).length;
  }

  get totalPendentes(): number {
    return this.tarefas.filter(t => !t.concluida).length;
  }

  alterarSituacao(tarefa: Tarefa): void {
    tarefa.concluida = !tarefa.concluida;
  }
}
