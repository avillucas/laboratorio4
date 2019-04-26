import { Component, OnInit, Input } from "@angular/core";
import { identifierModuleUrl } from "@angular/compiler";

@Component({
  selector: "app-boton-modificar",
  templateUrl: "./boton-modificar.component.html",
  styleUrls: ["./boton-modificar.component.css"]
})
export class BotonModificarComponent implements OnInit {
  @Input() id: number;
  constructor() {}
  ngOnInit() {}

  public clkModifcar(){
    console.log(this.id);
  }
}
