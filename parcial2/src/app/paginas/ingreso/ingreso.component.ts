import { AuthService } from './../../servicios/auth.service';
import { Component, OnInit } from '@angular/core';

import {
  FormBuilder,
  Validators,
  FormControl,
  FormGroup
} from '@angular/forms';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.sass']
})
export class IngresoComponent implements OnInit {
  constructor(private builder: FormBuilder, private authService: AuthService) {}

  email = new FormControl('email', [
    Validators.required,
    Validators.minLength(1),
    Validators.maxLength(255)
  ]);

  clave = new FormControl('password', [
    Validators.required,
    Validators.minLength(1),
    Validators.maxLength(255)
  ]);

  loginForm: FormGroup = this.builder.group({
    email: this.email,
    clave: this.clave
  });

  Ingresar() {
    const email = this.loginForm.get('email').value;
    const clave = this.loginForm.get('clave').value;
    this.authService.login(email, clave).then(
      res => {
        console.log(res);
        // this.errorMessage = '';
        // this.successMessage = 'Your account has been created';
      },
      err => {
        console.log(err);
        // this.errorMessage = err.message;
        // this.successMessage = '';
      }
    );
  }
  ngOnInit() {}
}
