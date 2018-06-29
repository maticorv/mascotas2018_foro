"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const passport = require("passport");
const post = require("./post.service");
function init(app) {
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
exports.init = init;
//# sourceMappingURL=module.js.map