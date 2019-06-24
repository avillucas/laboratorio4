import { environment } from './../../../environments/environment';
import { AuthService } from './../../servicios/auth.service';
import { Component, OnInit } from '@angular/core';
import { ILogin } from '../../clases/login.model';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.sass']
})
export class IngresoComponent implements OnInit {

  public UsuariosDefault: Array<ILogin>;
  public EmailControl: FormControl;
  public PasswordControl: FormControl;
  public LoginForm: FormGroup;

  constructor(private builder: FormBuilder, private authService: AuthService, private router: Router) {
    this.UsuariosDefault = environment.usuarios;
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

  public get EmailInput() {
    return this.LoginForm.get('email');
  }

  public get PasswordInput() {
    return this.LoginForm.get('password');
  }

  SeleccionDefault(usuarioSeleccionado: ILogin) {
    this.EmailInput.setValue(usuarioSeleccionado.email);
    this.PasswordInput.setValue(usuarioSeleccionado.password);
  }

  Ingresar() {
    const email = this.EmailInput.value;
    const clave = this.PasswordInput.value;
    this.authService.emailPasswordLogIn(email, clave).then(
      res => {
        this.router.navigate(['/']);
      },
      // TODO pasar esto a manejador de errores mas general
      // TODO definir una forma de mostrar los errores centralizada para el template
      err => {
        alert('Error en las credenciales, por favor intente con otro usuario ');
        console.log('Error en las credenciales, por favor intente con otro usuario')
        console.log(err);
      }
    );
  }

  ngOnInit() {
    const usuarioDefault = this.UsuariosDefault[0];
    this.EmailControl.setValue(usuarioDefault.email);
    this.PasswordControl.setValue(usuarioDefault.password);
  }
}
