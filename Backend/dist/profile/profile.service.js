"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const escape = require("escape-html");
const province_schema_1 = require("../provinces/province.schema");
const user_schema_1 = require("../security/user.schema");
const errorHandler = require("../utils/error.handler");
const profile_schema_1 = require("./profile.schema");
/**
 * @api {get} /profile Obtener Perfil
 * @apiName Obtener Perfil
 * @apiGroup Perfil
 *
 * @apiDescription Obtiene el perfil del usuario logueado.
 *
 * @apiUse IProfileResponse
 *
 * @apiUse AuthHeader
 * @apiUse ParamValidationErrors
 * @apiUse OtherErrors
 */
function read(req, res) {
    if (!req.profile) {
        return errorHandler.sendError(res, errorHandler.ERROR_NOT_FOUND, "No se encuentra el perfil del usuario logueado.");
    }
    res.json(req.profile);
}
exports.read = read;
function validateUpdate(req, res, next) {
    if (req.body.email) {
        req.check("email", "No es un email.").isEmail();
        req.sanitize("email").escape();
    }
    if (req.body.name) {
        req.check("name", "Hasta 1024 caracteres solamente.").isLength({ max: 1024 });
        req.sanitize("name").escape();
    }
    if (req.body.address) {
        req.check("address", "Hasta 1024 caracteres solamente.").isLength({ max: 1024 });
        req.sanitize("address").escape();
    }
    if (req.body.phone) {
        req.check("phone", "No es válido").isLength({ min: 1, max: 32 });
        req.sanitize("phone").escape();
    }
    if (req.body.picture) {
        req.sanitize("picture").escape();
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
    let profile = req.profile;
    if (!profile) {
        profile = new profile_schema_1.Profile();
        profile.user = req.user._id;
    }
    if (req.body.email) {
        profile.email = req.body.email;
    }
    if (req.body.name) {
        profile.name = req.body.name;
    }
    if (req.body.address) {
        profile.address = req.body.address;
    }
    if (req.body.phone) {
        profile.phone = req.body.phone;
    }
    if (req.body.picture) {
        profile.picture = req.body.picture;
    }
    if (req.province) {
        profile.province = req.province;
    }
    else {
        profile.province = undefined;
    }
    profile.save(function (err) {
        if (err)
            return errorHandler.handleError(res, err);
        if (req.body.name) {
            user_schema_1.User.findOne({
                _id: req.user.id,
                enabled: true
            }, function (err, usuario) {
                if (err)
                    return errorHandler.handleError(res, err);
                usuario.name = req.body.name;
                usuario.save(function (err) {
                    return res.json(profile);
                });
            });
        }
        else {
            return res.json(profile);
        }
    });
}
exports.update = update;
function fillForCurrentUser(req, res, next) {
    profile_schema_1.Profile.findOne({
        user: req.user._id,
        enabled: true
    }, function (err, profile) {
        if (err || !profile)
            return next();
        req.profile = profile;
        next();
    });
}
exports.fillForCurrentUser = fillForCurrentUser;
function fillProvinceIfPresent(req, res, next) {
    // Si no viene ninguna provincia definida, no hacemos nada
    if (!req.body.province) {
        return next();
    }
    province_schema_1.Province.findOne({
        _id: escape(req.body.province),
        enabled: true
    }, function (err, province) {
        if (err)
            return errorHandler.handleError(res, err);
        if (!province) {
            return errorHandler.sendError(res, errorHandler.ERROR_NOT_FOUND, "No se encuentra la provincia " + req.body.province);
        }
        req.province = province;
        next();
    });
}
exports.fillProvinceIfPresent = fillProvinceIfPresent;
//# sourceMappingURL=profile.service.js.map