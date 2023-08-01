import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AuthModule } from './auth/auth.module';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModuleModule } from './material-module.module';
import * as fromApp from './reducers';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MaterialModuleModule,
    AuthModule,    
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    BrowserAnimationsModule,
    // StoreModule.forFeature(fromApp.appFeatureKey, fromApp.reducers, { metaReducers: fromApp.metaReducers })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
