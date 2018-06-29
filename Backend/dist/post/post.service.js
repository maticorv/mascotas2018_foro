"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandler = require("../utils/error.handler");
const post_schema_1 = require("./post.schema");
const mongoose = require("mongoose");
function read(req, res) {
    res.json(req.post);
}
exports.read = read;
function findByTema(req, res, next) {
    post_schema_1.Post.find({
        tema: req.params.id
    }).exec(function (error, post) {
        if (error)
            return next();
        res.json(post);
    });
}
exports.findByTema = findByTema;
function getCurrentPost(req, res, next) {
    console.log("ID: " + req.params.postid);
    post_schema_1.Post.findOne({ _id: mongoose.Types.ObjectId(req.params.postid) }).exec(function (error, post) {
        if (error) {
            return next();
        }
        res.json(post);
    });
}
exports.getCurrentPost = getCurrentPost;
function findPostsByUser(req, res, next) {
    post_schema_1.Post.find({ user: req.user._id }).exec(function (error, post) {
        if (error)
            return next();
        res.json(post);
    });
}
exports.findPostsByUser = findPostsByUser;
function updatePost(req, res) {
    // tslint:disable-next-line:prefer-const
    let post = req.post;
    if (!post) {
        post = new post_schema_1.Post();
        post.user = req.user._id;
        post.tema = req.body.tema;
    }
    if (req.body.titulo)
        post.titulo = req.body.titulo;
    if (req.body.descripcion)
        post.descripcion = req.body.descripcion;
    if (req.body.contenido)
        post.contenido = req.body.contenido;
    post.save(function (err) {
        if (err)
            return errorHandler.handleError(res, err);
        return res.json(post);
    });
}
exports.updatePost = updatePost;
function deletePost(req, res, next) {
    post_schema_1.Post.deleteOne({ _id: mongoose.Types.ObjectId(req.params.postid) }).exec(function (error, post) {
        if (error)
            return next();
        return res.json(post);
    });
}
exports.deletePost = deletePost;
//# sourceMappingURL=post.service.js.map