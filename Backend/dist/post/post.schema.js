"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.PostSchema = new mongoose.Schema({
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
exports.PostSchema.pre("save", function (next) {
    this.createdAt = Date.now();
    next();
});
exports.Post = mongoose.model("Post", exports.PostSchema);
//# sourceMappingURL=post.schema.js.map