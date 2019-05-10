import { Component, OnInit } from '@angular/core';
import { HeladoService } from '../../servicios/helado.service';
import { PeliculasService } from '../../servicios/peliculas.service';

@Component({
  selector: 'app-helados-lista',
  templateUrl: './helados-lista.component.html',
  styleUrls: ['./helados-lista.component.css']
})
export class HeladosListaComponent implements OnInit {

  public peliculas;
  encontrado: any;

  public recargarLista(){
   this.cargarLista();
  }

  constructor( private peliculasService: PeliculasService) {
    this.peliculas = [];
  }

  private cargarLista ()
   {
    this.peliculasService.listar().then(data => {
      this.peliculas = data;
    });
   }
  ngOnInit() {
    this.cargarLista();
  }

  mostrarEncontrado(elementoEncontrado: any) {
    this.encontrado = elementoEncontrado.encontrado;
  }
}
