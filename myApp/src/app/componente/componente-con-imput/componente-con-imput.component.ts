import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from '../../class/usuario';

@Component({
  selector: 'app-componente-con-imput',
  templateUrl: './componente-con-imput.component.html',
  styleUrls: ['./componente-con-imput.component.css']
})
export class ComponenteConImputComponent implements OnInit {

  @Input() usuario: Usuario;

  constructor() {
  }

  ngOnInit() { }

}
