import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  fecha: string;

  constructor() { }

  ngOnInit() {
    let hoy: Date = new Date();
    this.fecha = `${hoy.getDate()}.${hoy.getMonth() + 1}.${hoy.getFullYear()}`;
  }

}
