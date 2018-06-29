import * as mongoose from "mongoose";

export interface IComentario extends mongoose.Document {
    _id: string;
    contenido: string;
    postid: mongoose.Schema.Types.ObjectId;
    userid: mongoose.Schema.Types.ObjectId;
    username: string;
    createdAt: Number;
    like: Number;
    dislike: Number;

}

const ComentarioSchema = new mongoose.Schema({
    contenido: {
        type: String,
        default: "",
        trim: true,
        required: "No puede ir vacio"
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    userid: {
        type: String,
        default: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: "Usuario es requerido"
    },
    postid: {
        type: String,
        default: "",
        ref: "Post",
        required: "El post es requerido"
    },
    username: {
        type: String,
        default: mongoose.Schema.Types.ObjectId.name,
        ref: "User",
        required: "Nombre de usuario es requerido"
    },
    like: {
        type: Number,
        default: 0,
    },
    dislike: {
        type: Number,
        default: 0,
    }
}, {collection: "comentario"});

ComentarioSchema.pre("save", function(this: IComentario, next) {
    this.createdAt = Date.now();
    next();
});

export let Comentario = mongoose.model<IComentario>("Comentario", ComentarioSchema);