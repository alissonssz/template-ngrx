import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentsModule } from './shared-components/shared-components.module';
import { SharedDirectivesModule } from './shared-directives/shared-directives.module';
import { SharedPipesModule } from './shared-pipes/shared-pipes.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedComponentsModule,
    SharedDirectivesModule,
    SharedPipesModule
  ]
})
export class SharedModule { }
