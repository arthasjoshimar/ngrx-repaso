import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { StoreModule } from '@ngrx/store';
import * as fromAuth from './reducers';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModuleModule } from '../material-module.module';
import {ReactiveFormsModule} from "@angular/forms";
import { AuthService } from './auth.service';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './auth.effects';


const routes: Routes = [
  {
    path:'',
    component: LoginComponent,
  }
];

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    HttpClientModule,
    MaterialModuleModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    CommonModule,
    StoreModule.forFeature(fromAuth.authFeatureKey, fromAuth.authReducer),
    EffectsModule.forFeature([AuthEffects]),
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule { }
