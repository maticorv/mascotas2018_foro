"use strict";

import * as mongoose from "mongoose";

export interface IPost extends mongoose.Document {
    titulo: string;
    descripcion: string;
    contenido: string;

    createdAt: Number;
    user: mongoose.Schema.Types.ObjectId;
    tema: mongoose.Schema.Types.ObjectId;
}

export let PostSchema = new mongoose.Schema({
    titulo: {
      type: String,
      default: "",
      trim: true,
      required: "Titulo es requerido"
    },
    descripcion: {
      type: String,
      default: "",
      trim: true,
      required: "Se requiere descripción"
    },
    contenido: {
      type: String,
      default: "",
      trim: true,
      required: "Se requiere contenido"
    },
    user: {
      type: String,
      default: mongoose.Types.ObjectId,
      ref: "User",
      required: "Usuario es requerido"
    },
    tema: {
        type: String,
        default: "",
        ref: "Tema",
        required: "Tema es requerido"
      },
    createdAt: {
      type: Date,
      default: Date.now()
    }
  }, { collection: "post" });
  /**
   * Antes de guardar
   */
  PostSchema.pre("save", function (this: IPost, next) {
    this.createdAt = Date.now();
    next();
  });

  export let Post = mongoose.model<IPost>("Post", PostSchema);