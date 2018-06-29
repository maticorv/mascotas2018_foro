import { Component, OnInit, Input } from "@angular/core";
import { ComentarioService, IComentario } from "./comentario.service";
import { IPost } from "../post.service";
import { UsuarioService, Usuario } from "../../../usuario/usuario.service";

@Component({
  selector: "comentarios",
  templateUrl: "./comentarios.component.html",
  styleUrls: ["./comentarios.component.css"],
})
export class ComentariosComponent implements OnInit {
  @Input() postid: string = "";
  constructor(private comentarioservice: ComentarioService, private usuarioservice: UsuarioService) {
    this.comentario = {
      _id: undefined,
      contenido: "",
      createdAt: "",
      username: "",
      like: 0,
      dislike: 0
    };
    this.usuario = {
      _id: "",
      login: "",
      name: "",
      email: "",
      enabled: true,
      roles: [""]
    };
  }
  comentarios: IComentario[];
  comentario: IComentario;
  usuario: Usuario;
  ngOnInit() {
    this.usuarioservice.getPrincipal().then(user => {this.usuario = user; });
  }
  ngOnChanges() { // NO PUEDO PONER ESTO EN ngOnInit() porque primero se llama
    this.comentarioservice.getComentarios(this.postid).then(comentarios => {this.comentarios = comentarios; });
  }
  onSubmit() {
    this.comentario.username = this.usuario.login;
    this.comentarioservice.addComentario(this.comentario, this.postid).then(comentarios => {this.comentarioservice.getComentarios(this.postid).then(comentarios => {this.comentarios = comentarios; }); });
  }
  onLike(comentario: IComentario, i: number) {
    this.comentarioservice.likeComentario(comentario).then(com => {this.comentarios[i].like += 1; });
  }
  onDislike(comentario: IComentario, i: number) {
    console.log(i);
    this.comentarioservice.dislikeComentario(comentario).then(com => {this.comentarios[i].dislike += 1; });
  }
  get usuarioLogueado(): Usuario {
    return this.usuarioservice.usuarioLogueado;
  }
}
