import { Component, OnInit } from "@angular/core";
import { HeladoService } from "../../servicios/helado.service";

@Component({
  selector: "app-helados-lista",
  templateUrl: "./helados-lista.component.html",
  styleUrls: ["./helados-lista.component.css"]
})
export class HeladosListaComponent implements OnInit {
  private heladosService: HeladoService;
  public helados;

  constructor(serviceHelados: HeladoService) {
    this.helados = [];
    this.heladosService = serviceHelados;
  }

  ngOnInit() {
    this.heladosService.listar().then(data => {
      this.helados = data;
    });
  }
}
