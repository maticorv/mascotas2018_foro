"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const escape = require("escape-html");
const errorHandler = require("../utils/error.handler");
const province_schema_1 = require("./province.schema");
function read(req, res) {
    res.json(req.province);
}
exports.read = read;
/**
 * @api {get} /province Listar Provincias
 * @apiName Listar Provincias
 * @apiGroup Provincias
 *
 * @apiDescription Lista todas las provincias.
 *
 * @apiSuccessExample {json} Provincia
 *   [ {
 *      "name": "Nombre Provincia",
 *      "enabled": [true|false]
 *     }, ...
 *   ]
 *
 * @apiUse ParamValidationErrors
 * @apiUse OtherErrors
 */
function list(req, res) {
    province_schema_1.Province.find({ enabled: true }).exec(function (err, provincias) {
        if (err)
            return errorHandler.handleError(res, err);
        return res.json(provincias);
    });
}
exports.list = list;
function findByID(req, res, next) {
    const id = req.params.provinceId;
    province_schema_1.Province.findOne({
        _id: escape(id),
        enabled: true
    }, function (err, province) {
        if (err)
            return errorHandler.handleError(res, err);
        if (!province) {
            return errorHandler.sendError(res, errorHandler.ERROR_NOT_FOUND, "No se pudo encontrar la provincia " + id);
        }
        req.province = province;
        next();
    });
}
exports.findByID = findByID;
function validateUpdate(req, res, next) {
    if (req.body.name) {
        req.check("name", "Hasta 256 caracteres solamente.").isLength({ max: 256 });
        req.sanitize("name").escape();
    }
    req.getValidationResult().then(function (result) {
        if (!result.isEmpty()) {
            return errorHandler.handleExpressValidationError(res, result);
        }
        next();
    });
}
exports.validateUpdate = validateUpdate;
function update(req, res) {
    let province = req.province;
    if (!province) {
        province = new province_schema_1.Province();
    }
    if (req.body.name) {
        province.name = req.body.name;
    }
    province.save(function (err) {
        if (err)
            return errorHandler.handleError(res, err);
        res.json(province);
    });
}
exports.update = update;
function remove(req, res) {
    const province = req.province;
    province.enabled = false;
    province.save(function (err) {
        if (err)
            return errorHandler.handleError(res, err);
        res.send();
    });
}
exports.remove = remove;
//# sourceMappingURL=province.service.js.map