import { Component, OnInit } from "@angular/core";
import { ForoService, ITema } from "./foro.service";
import { ActivatedRoute, Router } from "@angular/router";
import * as errorHandler from "../tools/error-handler";

@Component({
  selector: "app-nuevo-tema",
  templateUrl: "./nuevo-tema.component.html",
  styleUrls: ["./nuevo-tema.component.css"]
})
export class NuevoTemaComponent implements OnInit {
  tema: ITema;

  constructor(private foroservice: ForoService, private route: ActivatedRoute, private router: Router) {
    this.tema = {
      _id: undefined,
      titulo: "",
      descripcion: "",
      createdAt: "",
      adminId: ""
    };
  }

  ngOnInit() {
  }

  public submitForm(): void {
    this.foroservice.guardarTema(this.tema)
    .then(tema => this.router.navigate(["/foros"]));
  }

}
