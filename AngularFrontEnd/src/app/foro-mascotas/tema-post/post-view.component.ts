import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { PostService, IPost } from "./post.service";
import { ComentariosComponent }  from "./comentarios/comentarios.component";

@Component({
  selector: "app-post-view",
  templateUrl: "./post-view.component.html",
  styleUrls: ["./post-view.component.css"]
})
export class PostViewComponent implements OnInit {
  post: IPost;
  postid: string;
  temaid: string;
  constructor(
    private postservice: PostService,
    private route: ActivatedRoute,
    private router: Router
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
    this.route.params.subscribe(params => {this.postid = params["postid"]; });
    this.route.params.subscribe(params => {this.temaid = params["id"]; });
    this.postservice.getCurrentPost(this.postid).then(post => (this.post = post));
  }

}
