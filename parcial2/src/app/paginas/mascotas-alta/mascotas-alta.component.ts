import { Component, OnInit } from '@angular/core';
import { MascostasService } from 'src/app/servicios/mascostas.service';

@Component({
  selector: 'app-mascotas-alta',
  templateUrl: './mascotas-alta.component.html',
  styleUrls: ['./mascotas-alta.component.css']
})
export class MascotasAltaComponent implements OnInit {

  constructor(private mService: MascostasService) { }

  ngOnInit() {
  }

}
