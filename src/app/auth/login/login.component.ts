import { Component } from '@angular/core';
import {UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";
import { AuthService } from '../auth.service';
import { noop, tap } from 'rxjs';
import { Store } from '@ngrx/store';
import { login } from '../auth.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form: UntypedFormGroup;

  constructor(private fb: UntypedFormBuilder,
              private authService: AuthService,
              private store: Store,
              private router: Router){
    this.form = this.fb.group({
      email: ['test@angular-university.io', [Validators.required]],
      password: ['test', [Validators.required]]
    });
  }

  login() {
    const val =  this.form.value;

    this.authService.login(val.email, val.password)
      .pipe(
        tap(user => {
          console.log("DATO API ", user);
          this.store.dispatch(login({user}));
          this.router.navigateByUrl('/courses/list/courses');
          
        })
      ).subscribe( {
        complete: noop,
        error: () => alert('Login Failed')        
      }
    );
  }
}
