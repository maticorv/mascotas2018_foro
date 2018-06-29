"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const passport = require("passport");
const security = require("../security/security.service");
const province = require("./province.service");
/**
 * Configura e inicializa los contenidos del Modulo
 */
function init(app) {
    // Rutas del controlador
    app.route("/province")
        .get(province.list)
        .put(passport.authenticate("jwt", { session: false }), security.validateAdminRole, province.validateUpdate, province.update);
    app.route("/province/:provinceId")
        .get(province.findByID, province.read)
        .delete(passport.authenticate("jwt", { session: false }), security.validateAdminRole, province.findByID, province.validateUpdate, province.remove);
}
exports.init = init;
//# sourceMappingURL=module.js.map