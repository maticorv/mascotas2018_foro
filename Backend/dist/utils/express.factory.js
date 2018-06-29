"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require("body-parser");
const compression = require("compression");
const cors = require("cors");
const express = require("express");
const expressValidator = require("express-validator");
const helmet = require("helmet");
const morgan = require("morgan");
const passport = require("passport");
const path = require("path");
const imageModule = require("../image/module");
const indexModule = require("../index/module");
const mascotasModule = require("../pet/module");
const comentariosModule = require("../comentario/module");
const postModule = require("../post/module");
const foroModule = require("../foro/module");
const perfilModule = require("../profile/module");
const provinciasModule = require("../provinces/module");
const seguridadModule = require("../security/module");
const passportHandler = require("../security/passport");
const errorHandler = require("../utils/error.handler");
function init(appConfig) {
    // Notas de configuración de express http://expressjs.com/es/guide/using-middleware.html#middleware.application
    const app = express();
    app.set("port", appConfig.port);
    // Habilitar Cors
    app.use(cors({
        origin: true,
        optionsSuccessStatus: 200,
        credentials: true
    }));
    // Si estamos en level debug, debaguear los request
    if (appConfig.logLevel == "debug") {
        app.use(morgan("dev"));
    }
    // Configuramos el server para que tome los json correctamente
    app.use(bodyParser.urlencoded({ extended: true, limit: "20mb" }));
    app.use(bodyParser.json({ limit: "5mb" }));
    // Configurar express para comprimir contenidos de text en http
    app.use(compression());
    // Configuramos passport, autentificación por tokens y db
    app.use(passport.initialize());
    app.use(passport.session());
    // Permite hacer validaciones de parámetros req.assert
    app.use(expressValidator());
    // helmet le da seguridad al sistema para prevenir hacks
    app.use(helmet.xssFilter()); // Previene inyección de javascript
    app.use(helmet.noSniff());
    app.use(helmet.ieNoOpen());
    app.disable("x-powered-by");
    // Esta es la ruta de contenidos estáticos, no deberían haber muchos pero algo de documentación
    // vendría bien como contenido estático.
    app.use(express.static(path.join(__dirname, "../public"), { maxAge: 31557600000 }));
    // Iniciamos nuestros módulos
    passportHandler.init();
    // Iniciamos las rutas del directorio
    // mas sobre rutas http://expressjs.com/es/guide/routing.html
    indexModule.init(app);
    mascotasModule.init(app);
    comentariosModule.init(app);
    postModule.init(app);
    foroModule.init(app);
    perfilModule.init(app);
    provinciasModule.init(app);
    seguridadModule.init(app);
    imageModule.init(app);
    // Para el manejo de errores, para que los loguee en la consola
    app.use(errorHandler.logErrors);
    // Responder con JSON cuando hay un error 404, sino responde con un html
    // Esto tiene que ir al final porque sino nos sobreescribe las otras rutas
    app.use(errorHandler.handle404);
    return app;
}
exports.init = init;
//# sourceMappingURL=express.factory.js.map