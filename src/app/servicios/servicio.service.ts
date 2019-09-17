import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Perfil } from '../modelos/Perfil';


@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  private URL = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  public obtenerPerfilesFalsos( numPerfiles: number) {
    return this.http.get(this.URL + 'perfiles/falsos/' + numPerfiles);
  }

  crearPerfil(perfil:Perfil){
    return this.http.post(this.URL + "perfil/nuevo" , perfil);
  }
}
