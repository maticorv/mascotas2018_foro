"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandler = require("../utils/error.handler");
const tema_schema_1 = require("./tema.schema");
const mongoose = require("mongoose");
function read(req, res) {
    res.json(req.tema);
}
exports.read = read;
function update(req, res) {
    let tema = req.tema;
    if (!tema) {
        tema = new tema_schema_1.Tema();
        tema.adminId = req.user._id;
    }
    if (req.body.titulo) {
        tema.titulo = req.body.titulo;
    }
    if (req.body.descripcion) {
        tema.descripcion = req.body.descripcion;
    }
    tema.save(function (err) {
        if (err)
            return errorHandler.handleError(res, err);
        res.json(tema);
    });
}
exports.update = update;
function getOneTema(req, res, next) {
    const tema_id = mongoose.Types.ObjectId(req.params.tema_id);
    tema_schema_1.Tema.findOne({ _id: tema_id }).exec(function (err, tema) {
        if (err)
            return next();
        res.json(tema);
    });
}
exports.getOneTema = getOneTema;
function findTema(req, res, next) {
    tema_schema_1.Tema.find().exec(function (err, tema) {
        if (err)
            return next();
        res.json(tema);
    });
}
exports.findTema = findTema;
//# sourceMappingURL=foro.service.js.map