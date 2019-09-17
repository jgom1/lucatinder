import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/servicios/servicio.service';
import { Perfil } from 'src/app/modelos/Perfil';

@Component({
  selector: 'app-listado-perfiles',
  templateUrl: './listado-perfiles.component.html',
  styleUrls: ['./listado-perfiles.component.scss']
})
export class ListadoPerfilesComponent implements OnInit {

  perfiles: Perfil[];

  constructor(private _servicio: ServicioService) { }

  ngOnInit() {
    this._servicio.obtenerPerfilesFalsos(20).subscribe((respuesta: Perfil[]) => this.perfiles = respuesta);
  }

  obtenerEdad(nacimiento: string): number{
    let diferencia = new Date(Date.now() - new Date(nacimiento).valueOf());
    return Math.abs(diferencia.getUTCFullYear() - 1970);
  }

}
