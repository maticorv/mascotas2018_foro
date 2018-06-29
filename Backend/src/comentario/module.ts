"use strict";
import { Express } from "express";
import * as passport from "passport";
import * as comentario from "./comentario.service";

export function init(app: Express) {
    app
        .route("/comentario/:id")
        .post(passport.authenticate("jwt", { session: false }), comentario.AddComentario);
    app
        .route("/comentario/:id/like")
        .post(passport.authenticate("jwt", { session: false }), comentario.LikeComentario);
    app
        .route("/comentario/:id/dislike")
        .post(passport.authenticate("jwt", { session: false }), comentario.DislikeComentario);
    app
        .route("/post/:id/comentarios")
        .get(comentario.GetComentariosOfPost);
}