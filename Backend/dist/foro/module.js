"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const passport = require("passport");
const foro = require("./foro.service");
const security = require("../security/security.service");
function init(app) {
    app
        .route("/foro")
        .get(foro.findTema)
        .post(passport.authenticate("jwt", { session: false }), security.validateAdminRole, foro.update);
    app
        .route("/foro/:tema_id")
        .get(foro.getOneTema);
}
exports.init = init;
//# sourceMappingURL=module.js.map