import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.sass']
})
export class RegistroComponent implements OnInit {

  public NombreControl: FormControl;
  public EmailControl: FormControl;
  public PasswordControl: FormControl;
  public TipoControl: FormControl;
  public RegistroForm: FormGroup;


  constructor(private builder: FormBuilder, private authService: AuthService, private router: Router) {
    this.NombreControl = new FormControl(this.NombreControl, [
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(255)
    ]);

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

    this.TipoControl = new FormControl(this.TipoControl, [
      Validators.required
    ]);

    this.RegistroForm = this.builder.group({
      nombre: this.NombreControl,
      email: this.EmailControl,
      password: this.PasswordControl,
      tipo: this.TipoControl,
    });
  }

  public get NombreInput() {
    return this.RegistroForm.get('nombre');
  }

  public get EmailInput() {
    return this.RegistroForm.get('email');
  }

  public get PasswordInput() {
    return this.RegistroForm.get('password');
  }

  public get TipoInput() {
    return this.RegistroForm.get('tipo');
  }

  Registrar() {
    const email = this.EmailInput.value;
    const nombre = this.NombreInput.value;
    const password = this.PasswordInput.value;
    this.authService.clienteSingIn(nombre, email, password).then(res => {
        this.router.navigate(['']);
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
    this.TipoInput.setValue(0);
  }

}
