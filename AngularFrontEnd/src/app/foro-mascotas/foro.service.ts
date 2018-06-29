import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/toPromise";
import { RestBaseService } from "../tools/rest.tools";


@Injectable()
export class ForoService extends RestBaseService {
  private urlforo = "/foro";
  constructor(private http: Http) {
    super();
  }
  listarTemas(): Promise<ITema[]> {
    return this.http
    .get(ForoService.serverUrl + this.urlforo)
    .toPromise()
    .then(response => {return response.json() as ITema[]; })
    .catch(this.handleError);
  }

  getCurrentTema(temaid: string): Promise<ITema> {
    return this.http
    .get(ForoService.serverUrl + this.urlforo + "/" + temaid)
    .toPromise()
    .then(response => {return response.json() as ITema; })
    .catch(this.handleError);
  }

  guardarTema(value: ITema): Promise<ITema> {
    return this.http.post(
      ForoService.serverUrl + this.urlforo,
      JSON.stringify(value),
      this.getRestHeader()
    ).toPromise().then(
        response => {return response.json() as ITema; }
      ).catch(this.handleError);
  }
}

export interface ITema {
  _id: string;
  titulo: string;
  descripcion: string;
  createdAt: string;
  adminId: string;
}