"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
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
}, { collection: "comentario" });
ComentarioSchema.pre("save", function (next) {
    this.createdAt = Date.now();
    next();
});
exports.Comentario = mongoose.model("Comentario", ComentarioSchema);
//# sourceMappingURL=comentario.schema.js.map