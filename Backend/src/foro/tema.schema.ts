import * as mongoose from "mongoose";

export interface ITema extends mongoose.Document {
    _id: string;
    titulo: string;
    descripcion: string;
    createdAt: Number;
    adminId: mongoose.Schema.Types.ObjectId;
}

export let TemaSchema = new mongoose.Schema({
    titulo: {
        type: String,
        default: "",
        trim: true,
        required: "Se requiere titulo del tema"
    },
    descripcion: {
        type: String,
        default: "",
        trim: true,
        required: "Se requiere descripción del tema"
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    adminId: {
        type: String,
        default: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }

}, {collection: "tema"});

TemaSchema.pre("save", function (this: ITema, next) {
    this.createdAt = Date.now();

    next();
  });

  export let Tema = mongoose.model<ITema>("Tema", TemaSchema);