import { Component } from '@angular/core';
import {UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";
import { AuthService } from '../auth.service';
import { noop, tap } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form: UntypedFormGroup;

  constructor(private fb: UntypedFormBuilder,
              private authService: AuthService){
    this.form = fb.group({
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
          
        })
      ).subscribe( {
        complete: noop,
        error: () => alert('Login Failed')        
      }
    );
  }
}
