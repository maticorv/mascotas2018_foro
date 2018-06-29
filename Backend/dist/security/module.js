"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const passport = require("passport");
const security = require("./security.service");
/**
 * Modulo de seguridad, login/logout, cambio de contraseñas, etc
 */
function init(app) {
    app.route("/auth/password").post(passport.authenticate("jwt", { session: false }), security.validateCambiarPassword, security.changePassword);
    app.route("/auth/signup").post(security.validateSignUp, security.signup);
    app.route("/auth/signin").post(security.validateSignIn, security.signin);
    app.route("/auth/signout").get(passport.authenticate("jwt", { session: false }), security.signout);
    app
        .route("/auth/currentUser")
        .get(passport.authenticate("jwt", { session: false }), security.currentUser);
    app
        .route("auth/setadmin")
        .post(passport.authenticate("jwt", { session: false }), security.validateAdminRole, security.setUserToAdmin);
}
exports.init = init;
//# sourceMappingURL=module.js.map