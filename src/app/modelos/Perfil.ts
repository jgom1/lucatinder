export class Perfil{

    perfil_nombre: String;
    perfil_correo: String;
    perfil_password: String;
    perfil_nacimiento: String;
    perfil_sexo: String;
    perfil_preferencia: String;
    perfil_imagen?: String;
    perfil_descripcion?: String;
    perfil_id?: String;

    constructor(
        nombre: String, 
        correo: String,
        password: String,
        nacimiento: String,
        sexo: String,
        preferencia: String,
        imagen?: String,
        descripcion?: String,
        id?: String){
            this.perfil_nombre = nombre;
            this.perfil_correo = correo;
            this.perfil_password = password;
            this.perfil_nacimiento = nacimiento;
            this.perfil_sexo = sexo;
            this.perfil_preferencia = preferencia;
            this.perfil_imagen = imagen;
            this.perfil_descripcion = descripcion;
            this.perfil_id = id;
        }


}