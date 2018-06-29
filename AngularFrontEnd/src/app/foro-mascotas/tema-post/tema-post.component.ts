import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { PostService, IPost } from "./post.service";
import { ForoService, ITema } from "../foro.service";
import { UsuarioService, Usuario } from "../../usuario/usuario.service";
import { empty } from "rxjs/Observer";

@Component({
  selector: "app-tema-post",
  templateUrl: "./tema-post.component.html",
  styleUrls: ["./tema-post.component.css"]
})
export class TemaPostComponent implements OnInit {
  idtema: string = "";
  posts: IPost[];
  tema: ITema;

  constructor(
    private usuarioservice: UsuarioService,
    private postservice: PostService,
    private foroservice: ForoService,
    private route: ActivatedRoute,
    private router: Router
  ) {
   }
   get usuarioLogueado(): Usuario {
    return this.usuarioservice.usuarioLogueado;
  }
  ngOnInit() {
    this.route.params.subscribe(params => {this.idtema = params["id"]; });
    this.foroservice.getCurrentTema(this.idtema).then(tema => (this.tema = tema));
    this.postservice.listarPosts(this.idtema).then(posts => (this.posts = posts));

  }

}
