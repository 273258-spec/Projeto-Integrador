import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Exerc1 } from './exerc1/exerc1';
import { Exerc2 } from './exerc2/exerc2';
import { Exerc3 } from './exerc3/exerc3';
import { Exerc4 } from './exerc4/exerc4';
import { Exerc5 } from './exerc5/exerc5';
import { Exerc6 } from './exerc6/exerc6';
import { Exerc7 } from './exerc7/exerc7';
import { Exerc8 } from './exerc8/exerc8';
import { Exerc9 } from './exerc9/exerc9';
import { Exerc10 } from './exerc10/exerc10';
import { Exerc11 } from './exerc11/exerc11';
import {Exerc12} from './exerc12/exerc12';
import {Exerc13} from './exerc13/exerc13';
import {Exerc14} from './exerc14/exerc14';
import { Exerc15 } from './exerc15/exerc15';
const routes: Routes = [
  {path: 'exerc1', component: Exerc1 },
  {path: 'exerc2', component: Exerc2 },
  {path: 'exerc3', component: Exerc3 },
  {path: 'exerc4', component: Exerc4 },
  {path: 'exerc5', component: Exerc5 },
  {path: 'exerc6', component: Exerc6 },
  {path: 'exerc7', component: Exerc7 },
  {path: 'exerc8', component: Exerc8 },
  {path: 'exerc9', component: Exerc9 },
  {path: 'exerc10', component: Exerc10 },
  {path: 'exerc11', component: Exerc11 },
  {path: 'exerc12', component: Exerc12 },
  {path: 'exerc13', component: Exerc13 },
  {path: 'exerc14', component: Exerc14 },
  {path: 'exerc15', component: Exerc15 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaExercicio2RoutingModule {}
