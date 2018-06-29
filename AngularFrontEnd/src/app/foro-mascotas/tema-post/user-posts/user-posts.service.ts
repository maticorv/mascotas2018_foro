import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/toPromise";
import { RestBaseService } from "../../../tools/rest.tools";

@Injectable()
export class UserPostsService extends RestBaseService {

  constructor(private http: Http) { super(); }

  listUserPosts(): Promise<IPost[]> {
    return this.http.get(UserPostsService.serverUrl + "/currentuser/posts", this.getRestHeader()).toPromise()
    .then(response => { return response.json() as IPost[]; }).catch(this.handleError);
  }

  deletepost(postid: string): Promise<any> {
    return this.http.delete(UserPostsService.serverUrl + "/post/" + postid, this.getRestHeader() )
    .toPromise()
    .then(() => {return ""; }).catch(this.handleError);
  }

}

export interface IPost {
  _id: string;
  tema: string;
  titulo: string;
  descripcion: string;
  contenido: string;
}