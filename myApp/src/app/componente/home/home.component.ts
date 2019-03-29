import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public nombre: string;
  
  constructor(route: ActivatedRoute) {
    this.nombre = route.snapshot.paramMap.get('nombre');

  }

  ngOnInit() {
  }

}
