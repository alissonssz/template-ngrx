import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';

const routes: Routes = [
  {
    path: 'inicio',
    component: InicioComponent,
    data: {
      nome: 'inicio'
    } ,
    children: [
      {
        path: 'private',
        loadChildren: '../private/private.module#PrivateModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
