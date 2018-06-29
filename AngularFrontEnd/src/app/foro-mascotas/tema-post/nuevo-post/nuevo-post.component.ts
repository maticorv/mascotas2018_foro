import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { FormControl } from "@angular/forms";
import { PostService, IPost } from "../post.service";
import { Usuario, UsuarioService } from "../../../usuario/usuario.service";

@Component({
  selector: "app-nuevo-post",
  templateUrl: "./nuevo-post.component.html",
  styleUrls: ["./nuevo-post.component.css"]
})
export class NuevoPostComponent implements OnInit {
  editor: any;
  idtema: string = "";
  post: IPost;
  usuario: Usuario;
  postid: string;
  public editorcontent: string = "";
  public options: Object = {
    heightMin: 500
  };
  constructor(
    private postservice: PostService,
    private route: ActivatedRoute,
    private router: Router,
    public usuarioService: UsuarioService
  ) {
    this.post = {
      _id: undefined,
      tema: "",
      titulo: "",
      descripcion: "",
      contenido: ""

    };
  }

  ngOnInit() {
    this.route.params.subscribe(params => {this.idtema = params["id"]; this.postid = params ["postid"]; });
    this.usuarioLogueado();
    if (this.postid) { // SE ENTRA EN CASO DE EDITAR UN POST POR PARTE DEL USUARIO.
      console.log("MODO DE EDICION" + this.postid);
      this.postservice.getCurrentPost(this.postid).then(response => {this.post = response; });
      this.editorcontent = this.post.contenido;
      this.editor.html.set(this.post.contenido);
    }
  }
  onSubmit() {
    this.postservice.guardarPost(this.post, this.idtema, this.usuario._id)
    .then(post => this.router.navigate(["/foros/" + this.idtema + "/posts"]) );
  }
   usuarioLogueado() {
    this.usuarioService.getPrincipal().then(usuario => {this.usuario = usuario; });
  }

}
