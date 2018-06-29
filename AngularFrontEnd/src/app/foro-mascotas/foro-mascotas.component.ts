import { Component, OnInit } from "@angular/core";
import { NuevoTemaComponent } from "./nuevo-tema.component";
import { ForoService, ITema } from "./foro.service";
import { UsuarioService, Usuario } from "../usuario/usuario.service";

@Component({
  selector: "app-foro-mascotas",
  templateUrl: "./foro-mascotas.component.html",
  styleUrls: ["./foro-mascotas.component.css"]
})
export class ForoMascotasComponent implements OnInit {
  usuario: Usuario;
  errorMessage: string;
  temas: ITema[];
  constructor(private foroservice: ForoService, private usuarioservice: UsuarioService) { }

  ngOnInit() {
    this.foroservice.listarTemas().then(t => (this.temas = t))
    .catch(error => (this.errorMessage = <any>error));
  }
  get usuarioLogueado(): Usuario {
    return this.usuarioservice.usuarioLogueado.rol[1];
  }
}
