"use strict";
import { Express } from "express";
import * as passport from "passport";
import * as foro from "./foro.service";
import * as security from "../security/security.service";

export function init (app: Express) {
    app
        .route("/foro")
        .get( foro.findTema )
        .post(passport.authenticate("jwt", { session: false }), security.validateAdminRole, foro.update );
    app
        .route("/foro/:tema_id")
        .get( foro.getOneTema );
}

// SIEMPRE ACORDARSE DE PONER "/" AL PRINCIPIO DE LA RUTA!!!