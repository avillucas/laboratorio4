import { Component, OnInit } from '@angular/core';
import { MascostasService } from 'src/app/servicios/mascostas.service';
import { AuthService } from 'src/app/servicios/auth.service';
import { Mascota } from 'src/app/clases/mascota';
import { TipoAnimal } from 'src/app/enums/tipo-animal.enum';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import { Cliente } from 'src/app/clases/cliente';

@Component({
  selector: 'app-mascotas-alta',
  templateUrl: './mascotas-alta.component.html',
  styleUrls: ['./mascotas-alta.component.css']
})
export class MascotasAltaComponent implements OnInit {

  constructor(private mService: MascostasService, private aService: AuthService, private uService: UsuariosService) { }

  public Test() {
    const cliente = new Cliente('lucasdas@asdasd.com', 'asdasdadasd', 'asdasdasdasd');
    cliente.UID = 'N7a523koneWr1gwVQtyLy2xlCmv2';
    const mascota = new Mascota(TipoAnimal.perro, 'Labrador', 'Terry', 10, cliente);
    this.mService.crear(mascota);
  }

  ngOnInit() {
  }

}
