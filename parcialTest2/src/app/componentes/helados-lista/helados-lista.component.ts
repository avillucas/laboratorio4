import { Component, OnInit } from '@angular/core';
import { HeladoService } from '../../servicios/helado.service';

@Component({
  selector: 'app-helados-lista',
  templateUrl: './helados-lista.component.html',
  styleUrls: ['./helados-lista.component.css']
})
export class HeladosListaComponent implements OnInit {
  private heladosService: HeladoService;
  public productos;
  encontrado: any;

  constructor(serviceHelados: HeladoService) {
    this.productos = [];
    this.heladosService = serviceHelados;
  }

  ngOnInit() {
    this.heladosService.listar().then(data => {
      this.productos = data;
    });
  }

  mostrarEncontrado(elementoEncontrado: any) {
    this.encontrado = elementoEncontrado.encontrado;
  }
}
