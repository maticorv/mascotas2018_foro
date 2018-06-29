"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ERROR_UNAUTHORIZED = 401;
exports.ERROR_NOT_FOUND = 404;
exports.ERROR_UNAUTHORIZED_METHOD = 405;
exports.ERROR_BAD_REQUEST = 400;
exports.ERROR_INTERNAL_ERROR = 500;
// Error desconocido
function processUnknownError(res, err) {
    res.status(exports.ERROR_INTERNAL_ERROR);
    res.setHeader("X-Status-Reason", "Unknown error");
    return { error: err };
}
// Obtiene un error adecuando cuando hay errores de db
function processMongooseErrorCode(res, err) {
    res.status(exports.ERROR_BAD_REQUEST);
    try {
        switch (err.code) {
            case 11000:
            case 11001:
                res.setHeader("X-Status-Reason", "Unique constraint");
                const fieldName = err.errmsg.substring(err.errmsg.lastIndexOf("index:") + 7, err.errmsg.lastIndexOf("_1"));
                return {
                    messages: [{
                            path: fieldName,
                            message: "Este registro ya existe."
                        }]
                };
            default:
                res.status(exports.ERROR_BAD_REQUEST);
                res.setHeader("X-Status-Reason", "Unknown database error code:" + err.code);
                return { error: err };
        }
    }
    catch (ex) {
        res.status(exports.ERROR_INTERNAL_ERROR);
        res.setHeader("X-Status-Reason", "Unknown database error");
        return { error: err };
    }
}
// Error de validación de datos
function processValidationError(res, err) {
    res.setHeader("X-Status-Reason", "Validation failed");
    res.status(exports.ERROR_BAD_REQUEST);
    const messages = [];
    for (const key in err.errors) {
        messages.push({
            path: key,
            message: err.errors[key].message
        });
    }
    return {
        messages: messages
    };
}
/**
 * @apiDefine ParamValidationErrors
 *
 * @apiErrorExample {json} 400 Bad Request
 *     HTTP/1.1 400 Bad Request
 *     HTTP/1.1 Header X-Status-Reason: {Message}
 *     {
 *        "messages" : [
 *          {
 *            "path" : "propertyName",
 *            "message" : "Error Text"
 *          },
 *          ...
 *       ]
 *     }
 */
/**
 * @apiDefine 200OK
 *
 * @apiSuccessExample {json} Response
 *     HTTP/1.1 200 OK
 */
/**
 * @apiDefine OtherErrors
 *
 * @apiErrorExample {json} 404 Not Found
 *     HTTP/1.1 404 Not Found
 *     HTTP/1.1 Header X-Status-Reason: {Message}
 *     {
 *        "url" : "http://...",
 *        "error" : "Not Found"
 *     }
 *
 * @apiErrorExample {json} 500 Server Error
 *     HTTP/1.1 500 Internal Server Error
 *     HTTP/1.1 Header X-Status-Reason: {Message}
 *     {
 *        "error" : "Not Found"
 *     }
 */
function handleError(res, err) {
    if (err.code) { // Database Error
        return res.send(processMongooseErrorCode(res, err));
    }
    else if (err.errors) { // ValidationError
        return res.send(processValidationError(res, err));
    }
    else {
        return res.send(processUnknownError(res, err));
    }
}
exports.handleError = handleError;
function sendError(res, code, err) {
    res.status(code);
    res.setHeader("X-Status-Reason", err);
    return res.send({ error: err });
}
exports.sendError = sendError;
function handleExpressValidationError(res, err) {
    res.setHeader("X-Status-Reason", "Validation failed");
    res.status(exports.ERROR_BAD_REQUEST);
    const messages = [];
    for (const error of err.array({ onlyFirstError: true })) {
        messages.push({
            path: error.param,
            message: error.msg
        });
    }
    return res.send({ messages: messages });
}
exports.handleExpressValidationError = handleExpressValidationError;
// Controla errores
function logErrors(err, req, res, next) {
    if (!err)
        return next();
    console.error(err.message);
    res.status(err.status || exports.ERROR_INTERNAL_ERROR);
    res.json({
        error: err.message
    });
}
exports.logErrors = logErrors;
function handle404(req, res) {
    res.status(exports.ERROR_NOT_FOUND);
    res.json({
        url: req.originalUrl,
        error: "Not Found"
    });
}
exports.handle404 = handle404;
//# sourceMappingURL=error.handler.js.map