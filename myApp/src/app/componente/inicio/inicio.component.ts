import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  private router: Router;
  constructor( router: Router) {
    this.router = router;
  }

  ngOnInit() {
  }

  public seleccionA() {
    //  this.router.navigate(['/home', { nombre: 'Lucas' }]);
    }

    public seleccionB() {

    }

    public seleccionC() {

    }

}
