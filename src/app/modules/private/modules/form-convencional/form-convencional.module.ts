import { CommonModule } from '@angular/common';
import { FormConvencionalRoutingModule } from './form-convencional-routing.module';
import { FormClassicoComponent } from './components/form-classico/form-classico.component';
import { SharedComponentsModule } from 'src/app/shared/shared-components/shared-components.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { PessoaService } from './services/pessoa-service';

@NgModule({
  declarations: [FormClassicoComponent],
  imports: [
    CommonModule,
    FormConvencionalRoutingModule,
    SharedComponentsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    FormClassicoComponent
    
  ],
  providers: [
    PessoaService
  ]
})
export class FormConvencionalModule { }
