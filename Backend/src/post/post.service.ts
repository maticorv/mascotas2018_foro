import * as escape from "escape-html";
import * as express from "express";
import { NextFunction } from "express-serve-static-core";
import { IUserSessionRequest } from "../security/security.service";
import * as errorHandler from "../utils/error.handler";
import { IPost, Post } from "./post.schema";
import * as mongoose from "mongoose";
import { INSPECT_MAX_BYTES } from "buffer";
export interface IReadRequest extends IUserSessionRequest {
    post: IPost;
  }
  export function read(req: IReadRequest, res: express.Response) {
    res.json(req.post);
  }

  export interface IUpdateRequest extends IUserSessionRequest {
    post: IPost;
  }
export function findByTema(req: express.Request, res: express.Response, next: NextFunction) {
    Post.find({
        tema: req.params.id
    }).exec(function(error, post) {
        if (error) return next();
        res.json(post);
    });
}

export function getCurrentPost(req: express.Request, res: express.Response, next: NextFunction) {
    console.log("ID: " + req.params.postid);
    Post.findOne({_id: mongoose.Types.ObjectId(req.params.postid)}).exec(function(error, post) {
        if (error) {
            return next(); }
        res.json(post);
    });
}

export function findPostsByUser(req: IReadRequest, res: express.Response, next: NextFunction) {
    Post.find({user: req.user._id}).exec(function(error, post) {
        if (error) return next();
        res.json(post);
    });
}

export function updatePost(req: IUpdateRequest, res: express.Response) {
    // tslint:disable-next-line:prefer-const
    let post = req.post;
    if (!post) {
        post = new Post();
        post.user = req.user._id;
        post.tema = req.body.tema;
      }
    if (req.body.titulo)
        post.titulo = req.body.titulo;
    if (req.body.descripcion)
        post.descripcion = req.body.descripcion;
    if (req.body.contenido)
    post.contenido = req.body.contenido;
    post.save(function (err: any) {
        if (err) return errorHandler.handleError(res, err);
        return res.json(post);
    });

}

export function deletePost(req: express.Request, res: express.Response, next: NextFunction ) {
    Post.deleteOne({_id:  mongoose.Types.ObjectId(req.params.postid) }).exec(function(error, post) {
        if (error) return next();
        return res.json(post);
    });
}