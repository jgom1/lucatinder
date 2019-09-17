import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Perfil } from 'src/app/modelos/Perfil';
import { ServicioService } from 'src/app/servicios/servicio.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  perfil: Perfil;
  formulario: FormGroup;

  constructor(private _servicio: ServicioService) { }

  ngOnInit() {
    this.formulario = new FormGroup({
      usuario: new FormControl(null, Validators.required),
      correo: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8), Validators.maxLength(16)]),
      password2: new FormControl(null, [Validators.required, Validators.minLength(8), Validators.maxLength(16)]),
      nacimiento: new FormControl(null, Validators.required),
      sexo: new FormControl('H', Validators.required),
      preferencia: new FormControl('M', Validators.required)
    });
  }

  registrarUsuario() {
    this.perfil = new Perfil(
      this.formulario.value.usuario,
      this.formulario.value.correo,
      this.formulario.value.password2,
      this.formulario.value.nacimiento,
      this.formulario.value.sexo,
      this.formulario.value.preferencia);

      console.log(this.perfil);
     // this._servicio.crearPerfil(this.perfil).subscribe(console.log);


  }



}
