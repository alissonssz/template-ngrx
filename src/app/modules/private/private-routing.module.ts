import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'form-convencional',
    loadChildren: './modules/form-convencional/form-convencional.module#FormConvencionalModule',
    data: {
      nome: 'form convencional'
    }
  },
  {
    path: 'form-customizado',
    loadChildren: './modules/form-customizado/form-customizado.module#FormCustomizadoModule',
    data: {
      nome: 'form customizado'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
