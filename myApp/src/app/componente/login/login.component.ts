import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from './../../class/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public usuario: Usuario;
  private router: Router;

  constructor(router: Router) {
    this.usuario = new Usuario();
    this.router = router;
  }

  navegar() {
    this.router.navigate(['/home/:nombre', { nombre: 'Lucas' }]);
  }

  login() {
    console.info(this.usuario);
    // validar datos 
    // enviar al server 
    //conseguri token 
    // localStorage 
    //hacer peticion con tocken y redirigir
  }

  ngOnInit() {
  }

}
