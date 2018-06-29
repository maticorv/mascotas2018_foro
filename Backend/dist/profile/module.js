"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const passport = require("passport");
const profile = require("./profile.service");
function init(app) {
    app
        .route("/profile")
        .get(passport.authenticate("jwt", { session: false }), profile.fillForCurrentUser, profile.read)
        .put(passport.authenticate("jwt", { session: false }), profile.fillProvinceIfPresent, profile.fillForCurrentUser, profile.validateUpdate, profile.update);
}
exports.init = init;
//# sourceMappingURL=module.js.map