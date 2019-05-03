import { Component, OnInit, Input } from "@angular/core";
import { identifierModuleUrl } from "@angular/compiler";
import { HeladoService } from "../../servicios/helado.service";
@Component({
  selector: "app-boton-modificar",
  templateUrl: "./boton-modificar.component.html",
  styleUrls: ["./boton-modificar.component.css"]
})
export class BotonModificarComponent implements OnInit {
  @Input() id: number;
  private heladosService: HeladoService;
  constructor(serviceHelados: HeladoService) {
    this.heladosService = serviceHelados;
  }
  ngOnInit() { }

  public clkBorrar() {
    this.heladosService.borrar(this.id);
  }
}
