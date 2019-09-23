import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { PrivateModule } from './modules/private/private.module';
import { PublicModule } from './modules/public/public.module';
import { SharedModule } from './shared/shared.module';
import { SharedDirectivesModule } from './shared/shared-directives/shared-directives.module';
import { SharedComponentsModule } from './shared/shared-components/shared-components.module';
import { SharedPipesModule } from './shared/shared-pipes/shared-pipes.module';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './core/reducers';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule, 
    CoreModule,
    PrivateModule,
    PublicModule,
    SharedDirectivesModule,
    SharedComponentsModule,
    SharedPipesModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
