import { Component, OnInit } from '@angular/core';
import { Mascota } from 'src/app/clases/mascota';
import { IMascota } from 'src/app/clases/mascota.model';
import { MascostasService } from 'src/app/servicios/mascostas.service';

@Component({
  selector: 'app-mascotas-listar',
  templateUrl: './mascotas-listar.component.html',
  styleUrls: ['./mascotas-listar.component.css']
})
export class MascotasListarComponent implements OnInit {

  private listaMascotas: Array<any>;

  constructor(
    private mascotasService: MascostasService
  ) { }

  ngOnInit() {
    this.mascotasService.traerTodos()
    .subscribe(result => {
      this.listaMascotas = result;
    })
  }

}
