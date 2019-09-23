import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ContainerPadraoComponent } from './container-padrao/container-padrao.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ 
    HeaderComponent,
    ContainerPadraoComponent,
    FooterComponent  
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    ContainerPadraoComponent,
    FooterComponent  
  ]
})
export class SharedComponentsModule { }
