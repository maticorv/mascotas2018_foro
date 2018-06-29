"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.TemaSchema = new mongoose.Schema({
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
}, { collection: "tema" });
exports.TemaSchema.pre("save", function (next) {
    this.createdAt = Date.now();
    next();
});
exports.Tema = mongoose.model("Tema", exports.TemaSchema);
//# sourceMappingURL=tema.schema.js.map