import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormClassicoComponent } from './components/form-classico/form-classico.component';

const routes: Routes = [
  {
    path: 'form-classico',
    component: FormClassicoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormConvencionalRoutingModule { }
