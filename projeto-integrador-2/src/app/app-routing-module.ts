import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'lista-exercicio1', 
    loadChildren: () => import('./lista-exercicio1/lista-exercicio1-module').then(m => m.ListaExercicio1Module),
  },
  {
    path: 'lista-exercicio2', 
    loadChildren: () => import('./lista-exercicio2/lista-exercicio2-module').then(m => m.ListaExercicio2Module)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
