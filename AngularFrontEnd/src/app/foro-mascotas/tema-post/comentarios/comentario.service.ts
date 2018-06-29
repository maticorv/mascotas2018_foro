import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/toPromise";
import { RestBaseService } from "../../../tools/rest.tools";

@Injectable()
export class ComentarioService extends RestBaseService {

  urlpost: string = "/post/";
  urlcomentario: string = "/comentarios";

  constructor(private http: Http) {
    super();
  }

  addComentario(value: IComentario, idpost: string): Promise<IComentario[]> {
    return this.http.post(ComentarioService.serverUrl + "/comentario/" + idpost,
    JSON.stringify(value),
    this.getRestHeader())
    .toPromise()
    .then(response => {return response.json() as IComentario[]; }).catch(this.handleError);
  }
  likeComentario(comentario: IComentario): Promise<IComentario> {
    return this.http.post(ComentarioService.serverUrl + "/comentario/" + comentario._id + "/like", JSON.stringify(comentario), this.getRestHeader())
    .toPromise()
    .then(response => {return response.json() as IComentario; }).catch(this.handleError);
  }
  dislikeComentario(comentario: IComentario) {
    return this.http.post(ComentarioService.serverUrl + "/comentario/" + comentario._id + "/dislike", JSON.stringify(comentario), this.getRestHeader())
    .toPromise()
    .then(response => {return response.json() as IComentario; }).catch(this.handleError);
  }
  getComentarios(idpost: string): Promise<IComentario []> {
    return this.http.get(ComentarioService.serverUrl + this.urlpost + idpost + this.urlcomentario, this.getRestHeader())
    .toPromise()
    .then(response => {return response.json() as IComentario[]; }).catch(this.handleError);
  }
}

export interface IComentario {
  _id: string;
  contenido: string;
  createdAt: string;
  username: string;
  like: number;
  dislike: number;
}
