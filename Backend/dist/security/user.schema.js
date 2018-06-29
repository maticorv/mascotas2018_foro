"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crypto = require("crypto");
const mongoose = require("mongoose");
const appConfig = require("../utils/environment");
const conf = appConfig.getConfig(process.env);
/**
 * Validación para tamaño de contraseña
 */
const validateLocalStrategyPassword = function (password) {
    return password && password.length > 6;
};
/**
 * Esquea de un usuario del sistema
 */
exports.UserSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        default: "",
        required: "El nombre de usuario es requerido"
    },
    login: {
        type: String,
        unique: "El login ya existe",
        required: "El login es requerido",
        trim: true
    },
    password: {
        type: String,
        default: "",
        required: "La contraseña es requerida"
    },
    roles: {
        type: [
            {
                type: String,
                enum: ["user", "admin"]
            }
        ],
        default: ["user"]
    },
    updated: {
        type: Date,
        default: Date.now()
    },
    created: {
        type: Date,
        default: Date.now()
    },
    enabled: {
        type: Boolean,
        default: true
    }
}, { collection: "users" });
exports.UserSchema.path("password").validate(function (value) {
    return validateLocalStrategyPassword(value);
}, "La contraseña debe ser mayor a 6 caracteres");
/**
 * Trigger antes de guardar, si el password se modifico hay que encriptarlo
 */
exports.UserSchema.pre("save", function (next) {
    this.updated = Date.now();
    next();
});
/**
 * Crea un hash del password
 */
exports.UserSchema.methods.hashPassword = function (password) {
    return crypto
        .pbkdf2Sync(password, conf.passwordSalt, 10000, 64, "SHA1")
        .toString("base64");
};
exports.UserSchema.methods.setPasswordText = function (password) {
    this.password = this.hashPassword(password);
};
/**
 * Autentica un usuario
 */
exports.UserSchema.methods.authenticate = function (password) {
    return this.password && this.password === this.hashPassword(password);
};
exports.User = mongoose.model("User", exports.UserSchema);
//# sourceMappingURL=user.schema.js.map