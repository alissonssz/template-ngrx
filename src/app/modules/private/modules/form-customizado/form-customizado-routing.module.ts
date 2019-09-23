import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormClassicoComponent } from '../form-convencional/components/form-classico/form-classico.component';
import { FormAlteradoComponent } from './components/form-alterado/form-alterado.component';

const routes: Routes = [
  {
    path: 'form-alterado',
    component: FormAlteradoComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormCustomizadoRoutingModule { }
