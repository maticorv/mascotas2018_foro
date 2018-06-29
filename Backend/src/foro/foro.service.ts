"use strict";

import * as express from "express";
import { NextFunction } from "express-serve-static-core";
import { IUserSessionRequest } from "../security/security.service";
import * as errorHandler from "../utils/error.handler";
import { ITema, Tema } from "./tema.schema";
import * as mongoose from "mongoose";

export interface IReadRequest extends IUserSessionRequest {
    tema: ITema;
  }
  export function read(req: IReadRequest, res: express.Response) {
    res.json(req.tema);
  }
  export interface IUpdateRequest extends IUserSessionRequest {
    tema: ITema;
  }
  export function update(req: IUpdateRequest, res: express.Response) {
    let tema = req.tema;
    if (!tema) {
      tema = new Tema();
      tema.adminId = req.user._id;
    }
    if (req.body.titulo) {
      tema.titulo = req.body.titulo;
    }
    if (req.body.descripcion) {
      tema.descripcion = req.body.descripcion;
    }
    tema.save(function (err: any) {
      if (err) return errorHandler.handleError(res, err);
      res.json(tema);
    });
  }

  export function getOneTema(req: express.Request, res: express.Response, next: NextFunction) {
    const tema_id = mongoose.Types.ObjectId(req.params.tema_id);
    Tema.findOne({_id: tema_id}).exec(function (err, tema) {
      if (err) return next();
      res.json(tema);
    });
  }

  export function findTema(req: express.Request, res: express.Response, next: NextFunction) {
    Tema.find().exec(function (err, tema) {
      if (err) return next();
      res.json(tema);
    });
  }