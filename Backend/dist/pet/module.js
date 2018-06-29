"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const passport = require("passport");
const pet = require("./pet.service");
function init(app) {
    // Rutas de acceso a mascotas
    app
        .route("/pet")
        .get(passport.authenticate("jwt", { session: false }), pet.findByCurrentUser)
        .post(passport.authenticate("jwt", { session: false }), pet.validateUpdate, pet.update);
    app
        .route("/pet/:petId")
        .get(pet.findByID, pet.read)
        .put(passport.authenticate("jwt", { session: false }), pet.findByID, pet.validateOwner, pet.validateUpdate, pet.update)
        .delete(passport.authenticate("jwt", { session: false }), pet.findByID, pet.validateOwner, pet.remove);
}
exports.init = init;
//# sourceMappingURL=module.js.map