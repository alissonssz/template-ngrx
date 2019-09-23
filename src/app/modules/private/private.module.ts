import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { FormCustomizadoModule } from './modules/form-customizado/form-customizado.module';
import { FormConvencionalModule } from './modules/form-convencional/form-convencional.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    FormCustomizadoModule,
    FormConvencionalModule
  ]
})
export class PrivateModule { }
