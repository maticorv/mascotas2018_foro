"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const winston = require("winston");
const config = require("../utils/environment");
function getLogger() {
    if (!exports.logger) {
        exports.logger = new winston.Logger({
            transports: [
                new winston.transports.Console({
                    level: config.getConfig(process.env).logLevel,
                    raw: true
                })
            ]
        });
    }
    return exports.logger;
}
exports.getLogger = getLogger;
//# sourceMappingURL=logger.js.map