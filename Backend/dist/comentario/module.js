"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const passport = require("passport");
const comentario = require("./comentario.service");
function init(app) {
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
exports.init = init;
//# sourceMappingURL=module.js.map