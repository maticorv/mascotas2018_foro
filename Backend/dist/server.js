"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chalk = require("chalk");
const mongoose = require("mongoose");
const appConfig = require("./utils/environment");
const expressApp = require("./utils/express.factory");
// Variables de entorno
const conf = appConfig.getConfig(process.env);
// Establecemos conexión con MongoDD
mongoose.connect(conf.mongoDb, {}, function (err) {
    if (err) {
        console.error(chalk.default.red("No se pudo conectar a MongoDB!"));
        console.log(chalk.default.red(err.message));
        process.exit();
    }
});
// Se configura e inicializa express
const app = expressApp.init(conf);
app.listen(conf.port, () => {
    console.log(chalk.default.green(`Mascotas Server escuchando en puerto ${conf.port}`));
});
module.exports = app;
//# sourceMappingURL=server.js.map