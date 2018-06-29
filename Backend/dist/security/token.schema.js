"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.TokenSchema = new mongoose.Schema({
    valid: {
        type: Boolean,
        default: true,
        required: "Valid es requerido"
    },
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: "Usuario es requerido"
    }
}, { collection: "tokens" });
exports.Token = mongoose.model("Token", exports.TokenSchema);
//# sourceMappingURL=token.schema.js.map