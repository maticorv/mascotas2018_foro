"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function init(app) {
    app.get("/", (req, res, next) => {
        res.redirect("index.html");
    });
}
exports.init = init;
//# sourceMappingURL=module.js.map