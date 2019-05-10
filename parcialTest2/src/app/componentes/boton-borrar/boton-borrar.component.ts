import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';
import { PeliculasService } from 'src/app/servicios/peliculas.service';

@Component({
  selector: 'app-boton-borrar',
  templateUrl: './boton-borrar.component.html',
  styleUrls: ['./boton-borrar.component.css']
})
export class BotonBorrarComponent implements OnInit {
  @Input() id: number;
  @Output() elementoBorrado = new EventEmitter();

  constructor(private servicePeliculas: PeliculasService) {

  }
  ngOnInit() { }

  public clkBorrar() {
    this.servicePeliculas.borrar(this.id);
    this.elementoBorrado.emit();
  }
}
