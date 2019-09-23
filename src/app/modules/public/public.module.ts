import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { InicioComponent } from './components/inicio/inicio.component';
import { SharedComponentsModule } from 'src/app/shared/shared-components/shared-components.module';

@NgModule({
  declarations: [InicioComponent],
  imports: [
    CommonModule,
    PublicRoutingModule,
    SharedComponentsModule
  ],
  exports: [InicioComponent]
})
export class PublicModule { }
