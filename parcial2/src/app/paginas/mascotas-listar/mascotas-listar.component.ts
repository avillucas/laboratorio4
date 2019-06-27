import { Component, OnInit } from '@angular/core';
import { Mascota } from 'src/app/clases/mascota';
import { MascostasService } from 'src/app/servicios/mascostas.service';

@Component({
  selector: 'app-mascotas-listar',
  templateUrl: './mascotas-listar.component.html',
  styleUrls: ['./mascotas-listar.component.css']
})
export class MascotasListarComponent implements OnInit {

  private mascotas: Mascota[];

  constructor(private mascotasService: MascostasService) { }

  get Mascotas(): Mascota[] {
    return this.mascotas;
  }

  ngOnInit() {
    this.mascotasService.traerTodos().subscribe(data => {
      this.mascotas = data.map(e => {
        return { id: e.payload.doc.id, ...e.payload.doc.data() } as Mascota;
      });
    });
  }

  Crear(mascota: Mascota) {
    this.mascotasService.crear(mascota);
  }

  Actualizar(mascota: Mascota) {
    this.mascotasService.actualizar(mascota);
  }

  Borrar(mascota: Mascota) {
    this.mascotasService.borrar(mascota);
  }

}
