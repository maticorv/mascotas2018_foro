import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/toPromise";
import { RestBaseService } from "../../tools/rest.tools";

@Injectable()
export class PostService extends RestBaseService {
  urlpost = "/posts/";
  constructor(private http: Http) { super(); }

  /*
    LISTAMOS TODOS LOS POST RELACIONADOS CON EL TEMA
  */

  listarPosts(temaid: string): Promise<IPost[]> {
    return this.http.get(PostService.serverUrl + this.urlpost + temaid ) // http://localhost:3500/posts/<Aca va un hash>
    .toPromise()
    .then(response => {return response.json() as IPost[]; } ).catch(this.handleError);
  }

  /*
    ESTO ES PARA VER EL POST
  */
  getCurrentPost(postid: string): Promise<IPost> {
    return this.http.get(PostService.serverUrl + "/post/" + postid )
    .toPromise()
    .then (response => {console.log(response.json()) ; return response.json() as IPost; } ).catch(this.handleError);
  }

  /*
  GUARDAMOS EL POST QUE
  */
  guardarPost(value: IPost, temaid: string, userid: string): Promise<IPost> {
    value.tema = temaid;
    return this.http.post(
    PostService.serverUrl + this.urlpost + temaid,
    JSON.stringify(value),
    this.getRestHeader()).toPromise()
    .then(response => {return response.json() as IPost; } )
    .catch(this.handleError);
  }


}

export interface IPost {
  _id: string;
  tema: string;
  titulo: string;
  descripcion: string;
  contenido: string;
}
