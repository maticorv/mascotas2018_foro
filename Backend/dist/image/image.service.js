"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const escape = require("escape-html");
const redis = require("ioredis");
const uuid = require("uuid/v1");
const appConfig = require("../utils/environment");
const errorHandler = require("../utils/error.handler");
const conf = appConfig.getConfig(process.env);
const redisClient = new redis(conf.redisPort, conf.redisHost);
redisClient.on("connect", function () {
    console.log("connected");
});
function read(req, res) {
    res.json(req.image);
}
exports.read = read;
/**
 * @api {post} /image Guardar Imagen
 * @apiName Guardar Imagen
 * @apiGroup Imagen
 *
 * @apiDescription Guarda una imagen en la db
 *
 * @apiExample {json} Body
 *    {
 *      "image" : "Base 64 Image Text"
 *    }
 *
 * @apiSuccessExample {json} Response
 *    {
 *      "id": "id de imagen"
 *    }
 *
 * @apiUse AuthHeader
 * @apiUse ParamValidationErrors
 * @apiUse OtherErrors
 */
function validateCreate(req, res, next) {
    if (req.body.image) {
        req.check("image", "Debe especificar la imagen.").isLength({ min: 1 });
        req.check("image", "Imagen invalida").contains("data:image/");
    }
    req.getValidationResult().then(function (result) {
        if (!result.isEmpty()) {
            return errorHandler.handleExpressValidationError(res, result);
        }
        next();
    });
}
exports.validateCreate = validateCreate;
function create(req, res) {
    const image = {
        id: uuid(),
        image: req.body.image
    };
    redisClient.set(image.id, image.image, function (err, reply) {
        if (err) {
            return errorHandler.handleError(res, err);
        }
        res.json({ id: image.id });
    });
}
exports.create = create;
function findByID(req, res, next) {
    const id = req.params.imageId;
    redisClient.get(escape(id), function (err, reply) {
        if (err)
            return errorHandler.handleError(res, err);
        if (!reply) {
            return errorHandler.sendError(res, errorHandler.ERROR_NOT_FOUND, "No se pudo cargar la imagen " + id);
        }
        req.image = {
            id: escape(id),
            image: reply
        };
        next();
    });
}
exports.findByID = findByID;
//# sourceMappingURL=image.service.js.map