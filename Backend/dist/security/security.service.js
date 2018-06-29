"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const escape = require("escape-html");
const appConfig = require("../utils/environment");
const errorHandler = require("../utils/error.handler");
const passport = require("./passport");
const token_schema_1 = require("./token.schema");
const user_schema_1 = require("./user.schema");
const conf = appConfig.getConfig(process.env);
/**
 * @api {post} /auth/signup Crear Usuario
 * @apiName Crear Usuario
 * @apiGroup Seguridad
 *
 * @apiDescription Registra un nuevo usuario en el sistema.
 *
 * @apiExample {json} Usuario
 *    {
 *      "name": "Nombre Usuario",
 *      "login": "login"
 *      "password": "password"
 *    }
 *
 * @apiUse TokenResponse
 *
 * @apiUse ParamValidationErrors
 * @apiUse OtherErrors
 */
function validateSignUp(req, res, next) {
    req.check("name", "No puede quedar vac&iacute;o.").notEmpty();
    req.check("name", "Hasta 1024 caracteres solamente.").isLength({ max: 1024 });
    req.check("password", "No puede quedar vac&iacute;o.").notEmpty();
    req.check("password", "Mas de 4 caracteres.").isLength({ min: 4 });
    req.check("password", "Hasta 256 caracteres solamente.").isLength({ max: 256 });
    req.check("password", "S&oacute;lo letras y n&uacute;meros.").isAlphanumeric();
    req.check("login", "No puede quedar vac&iacute;o.").notEmpty();
    req.check("login", "Hasta 256 caracteres solamente.").isLength({ max: 64 });
    req.check("login", "S&oacute;lo letras y n&uacute;meros.").isAlphanumeric();
    req.sanitize("name").escape();
    req.sanitize("password").escape();
    req.sanitize("login").escape();
    req.getValidationResult().then(function (result) {
        if (!result.isEmpty()) {
            return errorHandler.handleExpressValidationError(res, result);
        }
        next();
    });
}
exports.validateSignUp = validateSignUp;
function signup(req, res) {
    const user = new user_schema_1.User();
    user.name = req.body.name;
    user.login = req.body.login;
    user.setPasswordText(req.body.password);
    user.roles = ["user"];
    // Then save the user
    user.save(function (err) {
        if (err)
            return errorHandler.handleError(res, err);
        createToken(res, user);
    });
}
exports.signup = signup;
/**
 * @api {post} /auth/signin Log In
 * @apiName Log In
 * @apiGroup Seguridad
 *
 * @apiDescription Login en el sistema.
 *
 * @apiExample {json} Usuario
 *    {
 *      "login": "login"
 *      "password": "password"
 *    }
 *
 * @apiUse TokenResponse
 *
 * @apiUse ParamValidationErrors
 * @apiUse OtherErrors
 */
function validateSignIn(req, res, next) {
    req.check("password", "No puede quedar vac&iacute;o.").notEmpty();
    req.check("password", "S&oacute;lo letras y n&uacute;meros.").isAlphanumeric();
    req.check("login", "No puede quedar vac&iacute;o.").notEmpty();
    req.check("login", "S&oacute;lo letras y n&uacute;meros.").isAlphanumeric();
    req.sanitize("password").escape();
    req.sanitize("login").escape();
    req.getValidationResult().then(function (result) {
        if (!result.isEmpty()) {
            return errorHandler.handleExpressValidationError(res, result);
        }
        next();
    });
}
exports.validateSignIn = validateSignIn;
function signin(req, res, next) {
    user_schema_1.User.findOne({
        login: escape(req.body.login),
        enabled: true
    }, function (err, user) {
        if (err)
            return errorHandler.handleError(res, err);
        if (!user) {
            return errorHandler.sendError(res, errorHandler.ERROR_NOT_FOUND, "Usuario no encontrado.");
        }
        if (!user.authenticate(req.body.password)) {
            return errorHandler.sendError(res, errorHandler.ERROR_BAD_REQUEST, "Password incorrecto.");
        }
        createToken(res, user);
    });
}
exports.signin = signin;
/**
 * @apiDefine TokenResponse
 *
 * @apiSuccessExample {json} Response
 *     HTTP/1.1 200 OK
 *     {
 *       "token": "tokenData"
 *     }
 */
/**
 * Crea un token de sesión, lo guarda en la base de Tokens, luego inicializa passport
 * con el token, para que se ingrese en el cache y se encripte correctamente
 */
function createToken(res, user) {
    const sessionToken = new token_schema_1.Token();
    sessionToken.usuario = user._id;
    sessionToken.valid = true;
    sessionToken.save(function (err) {
        if (err)
            return errorHandler.handleError(res, err);
        res.json({ token: passport.createToken(user, sessionToken) });
    });
}
/**
 * @api {get} /auth/signout Log Out
 * @apiName Log Out
 * @apiGroup Seguridad
 *
 * @apiDescription Desloguea al usuario y limpia el token de sesión.
 *
 * @apiSuccessExample {json} Response
 *     HTTP/1.1 200 OK
 *
 * @apiUse AuthHeader
 *
 * @apiUse OtherErrors
 */
function signout(req, res) {
    token_schema_1.Token.findById(req.user.token_id, function (err, token) {
        if (err)
            return errorHandler.handleError(res, err);
        if (!token) {
            return errorHandler.sendError(res, errorHandler.ERROR_NOT_FOUND, "Token invalido.");
        }
        token.valid = false;
        token.save(function (err) {
            if (err)
                return errorHandler.handleError(res, err);
            passport.invalidateSessionToken(req.user);
            return res.send();
        });
    });
}
exports.signout = signout;
/**
 * @api {get} /auth/currentUser Usuario Actual
 * @apiName Usuario Actual
 * @apiGroup Seguridad
 *
 * @apiDescription Obtiene información del usuario logueado actualmente
 *
 * @apiSuccessExample {json} Usuario
 *    {
 *      "id": "Id de usuario"
 *      "name": "Nombre Usuario",
 *      "login": "login"
 *      "roles": ["USER", "ADMIN"...]
 *    }
 *
 * @apiUse AuthHeader
 *
 * @apiUse OtherErrors
 */
function currentUser(req, res, next) {
    user_schema_1.User.findOne({
        _id: req.user.id,
        enabled: true
    }, function (err, user) {
        if (err)
            return errorHandler.handleError(res, err);
        if (!user) {
            return errorHandler.sendError(res, errorHandler.ERROR_NOT_FOUND, "El usuario no se encuentra");
        }
        return res.json({
            id: user.id,
            name: user.name,
            login: user.login,
            rol: user.roles
        });
    });
}
exports.currentUser = currentUser;
function validateCambiarPassword(req, res, next) {
    req.check("currentPassword", "No puede quedar vac&iacute;o.").notEmpty();
    req.check("currentPassword", "Mas de 4 caracteres.").isLength({ min: 4 });
    req.check("currentPassword", "Hasta 256 caracteres solamente.").isLength({ max: 256 });
    req.check("currentPassword", "S&oacute;lo letras y n&uacute;meros.").isAlphanumeric();
    req.check("newPassword", "No puede quedar vac&iacute;o.").notEmpty();
    req.check("newPassword", "Mas de 4 caracteres.").isLength({ min: 4 });
    req.check("newPassword", "Hasta 256 caracteres solamente.").isLength({ max: 256 });
    req.check("newPassword", "S&oacute;lo letras y n&uacute;meros.").isAlphanumeric();
    req.check("verifyPassword", "No puede quedar vac&iacute;o.").notEmpty();
    req.check("verifyPassword", "Mas de 4 caracteres.").isLength({ min: 4 });
    req.check("verifyPassword", "Hasta 256 caracteres solamente.").isLength({ max: 256 });
    req.check("verifyPassword", "S&oacute;lo letras y n&uacute;meros.").isAlphanumeric();
    req.sanitize("currentPassword").escape();
    req.sanitize("newPassword").escape();
    req.sanitize("verifyPassword").escape();
    req.getValidationResult().then(function (result) {
        if (!result.isEmpty()) {
            return errorHandler.handleExpressValidationError(res, result);
        }
        user_schema_1.User.findOne({
            _id: req.user.id,
            enabled: true
        }, function (err, user) {
            if (err)
                return errorHandler.handleError(res, err);
            if (!user) {
                return errorHandler.sendError(res, errorHandler.ERROR_NOT_FOUND, "El usuario no se encuentra.");
            }
            if (req.body.newPassword !== req.body.verifyPassword) {
                return errorHandler.sendError(res, errorHandler.ERROR_BAD_REQUEST, "Las contraseñas no coinciden.");
            }
            if (!user.authenticate(req.body.currentPassword)) {
                return errorHandler.sendError(res, errorHandler.ERROR_BAD_REQUEST, "El password actual es incorrecto.");
            }
            req.usuario = user;
            next();
        });
    });
}
exports.validateCambiarPassword = validateCambiarPassword;
function changePassword(req, res) {
    req.usuario.setPasswordText(req.body.newPassword);
    req.usuario.save(function (err) {
        if (err)
            return errorHandler.handleError(res, err);
        return res.send({
            message: "Contraseña cambiada"
        });
    });
}
exports.changePassword = changePassword;
function validateAdminRole(req, res, next) {
    user_schema_1.User.findOne({
        _id: req.user.id,
        enabled: true
    }, function (err, user) {
        if (err)
            return errorHandler.handleError(res, err);
        if (!user) {
            return errorHandler.sendError(res, errorHandler.ERROR_NOT_FOUND, "El usuario no se encuentra.");
        }
        if (!(user.roles.indexOf("admin") >= 0)) {
            return errorHandler.sendError(res, errorHandler.ERROR_UNAUTHORIZED, "No autorizado.");
        }
        next();
    });
}
exports.validateAdminRole = validateAdminRole;
/*

En esta sección de codigo, se pasa el usuario y se hace administrador del foro. Lo cual otorgará permisos para crear
y modificar Temas.

*/
function setUserToAdmin(req, res, next) {
    user_schema_1.User.findByIdAndUpdate({ _id: req.user._id }, { $push: { roles: "admin" } });
}
exports.setUserToAdmin = setUserToAdmin;
//# sourceMappingURL=security.service.js.map