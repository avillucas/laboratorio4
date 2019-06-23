import { environment } from './../../../environments/environment';
import { AuthService } from './../../servicios/auth.service';
import { Component, OnInit } from '@angular/core';
import { Login } from '../../clases/login.model';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.sass']
})
export class IngresoComponent implements OnInit {

  public UsuarioDefault: Array<Login>;
  public EmailControl: FormControl;
  public PasswordControl: FormControl;
  public LoginForm: FormGroup;

  constructor(private builder: FormBuilder, private authService: AuthService) {
    this.UsuarioDefault = environment.usuarios;
    this.EmailControl = new FormControl(this.EmailControl, [
      Validators.required,
      Validators.email,
      Validators.minLength(1),
      Validators.maxLength(255)
    ]);

    this.PasswordControl = new FormControl(this.PasswordControl, [
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(255)
    ]);

    this.LoginForm = this.builder.group({
      email: this.EmailControl,
      password: this.PasswordControl
    });
  }

  EmailInput() {
    return this.LoginForm.get('email');
  }

  PasswordInput() {
    return this.LoginForm.get('password');
  }

  SeleccionDefault(usuarioSeleccionado: Login) {
    this.EmailInput().setValue(usuarioSeleccionado.email);
    this.PasswordInput().setValue(usuarioSeleccionado.password);
  }

  Ingresar() {
    const email = this.EmailInput().value;
    const clave = this.PasswordInput().value;
    this.authService.emailPasswordLogIn(email, clave).then(
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

  ngOnInit() {
    const usuarioDefault = this.UsuarioDefault[0];
    this.EmailControl.setValue(usuarioDefault.email);
    this.PasswordControl.setValue(usuarioDefault.password);
  }
}
