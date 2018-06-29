import * as express from "express";
import { NextFunction } from "express-serve-static-core";
import { IUserSessionRequest } from "../security/security.service";
import * as errorHandler from "../utils/error.handler";
import * as mongoose from "mongoose";
import { Comentario, IComentario } from "./comentario.schema";

export interface IUpdateRequest extends IUserSessionRequest {
    comentario: IComentario;
  }

  export function AddComentario(req: IUpdateRequest, res: express.Response) {
    let comentario = req.comentario;
    if (!comentario) {
        comentario = new Comentario();
        comentario.userid = req.user._id;
        comentario.postid = req.params.id;
        comentario.username = req.body.username;
    }
    if (req.body.contenido) {
        comentario.contenido = req.body.contenido;
      }
    comentario.save(function(err: any) {
        if (err) return errorHandler.handleError(res, err);
        res.json(comentario);
    });
}

export function DislikeComentario(req: express.Request, res: express.Response, next: NextFunction) {
    Comentario.findOneAndUpdate({_id: mongoose.Types.ObjectId(req.params.id)}, {$inc : {"dislike" : 1}}).exec(function(err, comentario) {
        if (err) return errorHandler.handleError(res, err);
        res.json(comentario);
    });

}

export function LikeComentario(req: express.Request, res: express.Response, next: NextFunction) {
    Comentario.findOneAndUpdate({_id: mongoose.Types.ObjectId(req.params.id)}, {$inc : {"like" : 1}}).exec(function(err, comentario) {
        if (err) return errorHandler.handleError(res, err);
        res.json(comentario);
    });
}



export function GetComentariosOfPost(req: express.Request, res: express.Response, next: NextFunction) {
    Comentario.find({postid: req.params.id}).exec(function (err, comentario) {
        if (err) return next();
        res.json(comentario);
      });
}