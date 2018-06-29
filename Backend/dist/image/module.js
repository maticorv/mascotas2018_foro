"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const passport = require("passport");
const image = require("./image.service");
function init(app) {
    // Rutas de acceso a mascotas
    app
        .route("/image")
        .post(passport.authenticate("jwt", { session: false }), image.validateCreate, image.create);
    app
        .route("/image/:imageId")
        .get(image.findByID, image.read);
}
exports.init = init;
//# sourceMappingURL=module.js.map