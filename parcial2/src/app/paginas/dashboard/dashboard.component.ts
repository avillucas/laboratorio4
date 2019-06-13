import { Component, OnInit } from '@angular/core';
import { TemplateComponent } from '../template/template.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})

export class DashboardComponent extends TemplateComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
