import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormCustomizadoRoutingModule } from './form-customizado-routing.module';
import { FormAlteradoComponent } from './components/form-alterado/form-alterado.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedComponentsModule } from 'src/app/shared/shared-components/shared-components.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [FormAlteradoComponent],
  imports: [
    CommonModule,
    FormCustomizadoRoutingModule,
    SharedComponentsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [FormAlteradoComponent]
})
export class FormCustomizadoModule { }
