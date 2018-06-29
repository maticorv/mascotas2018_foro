"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandler = require("../utils/error.handler");
const mongoose = require("mongoose");
const comentario_schema_1 = require("./comentario.schema");
function AddComentario(req, res) {
    let comentario = req.comentario;
    if (!comentario) {
        comentario = new comentario_schema_1.Comentario();
        comentario.userid = req.user._id;
        comentario.postid = req.params.id;
        comentario.username = req.body.username;
    }
    if (req.body.contenido) {
        comentario.contenido = req.body.contenido;
    }
    comentario.save(function (err) {
        if (err)
            return errorHandler.handleError(res, err);
        res.json(comentario);
    });
}
exports.AddComentario = AddComentario;
function DislikeComentario(req, res, next) {
    comentario_schema_1.Comentario.findOneAndUpdate({ _id: mongoose.Types.ObjectId(req.params.id) }, { $inc: { "dislike": 1 } }).exec(function (err, comentario) {
        if (err)
            return errorHandler.handleError(res, err);
        res.json(comentario);
    });
}
exports.DislikeComentario = DislikeComentario;
function LikeComentario(req, res, next) {
    comentario_schema_1.Comentario.findOneAndUpdate({ _id: mongoose.Types.ObjectId(req.params.id) }, { $inc: { "like": 1 } }).exec(function (err, comentario) {
        if (err)
            return errorHandler.handleError(res, err);
        res.json(comentario);
    });
}
exports.LikeComentario = LikeComentario;
function GetComentariosOfPost(req, res, next) {
    comentario_schema_1.Comentario.find({ postid: req.params.id }).exec(function (err, comentario) {
        if (err)
            return next();
        res.json(comentario);
    });
}
exports.GetComentariosOfPost = GetComentariosOfPost;
//# sourceMappingURL=comentario.service.js.map