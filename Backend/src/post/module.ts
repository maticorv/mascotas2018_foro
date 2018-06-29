"use strict";

import { Express } from "express";
import * as passport from "passport";
import * as post from "./post.service";

export function init(app: Express) {
    app.
        route("/posts/:id")
        .get(post.findByTema) // Listar los posts de cada tema.
        .post(passport.authenticate("jwt", { session: false }), post.updatePost); // Crear post para el tema.
    app.
        route("/post/:postid")
        .get(post.getCurrentPost)
        .delete(passport.authenticate("jwt", { session: false }), post.deletePost);
    app
        .route("/currentuser/posts")
        .get(passport.authenticate("jwt", { session: false }), post.findPostsByUser);
}