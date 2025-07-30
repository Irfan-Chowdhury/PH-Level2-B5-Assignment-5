"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const app_1 = __importDefault(require("./app"));
const env_1 = require("./app/config/env");
const seedSuperAdmin_1 = require("./app/utils/seedSuperAdmin");
let server;
const StartServer = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(env_1.envVars.NODE_ENV);
        yield mongoose_1.default.connect(env_1.envVars.DB_URL);
        console.log("Connected to DB !!!");
        server = app_1.default.listen(env_1.envVars.PORT, () => {
            console.log("Server is listening to port 5000");
        });
    }
    catch (error) {
        console.log(error);
    }
});
(() => __awaiter(void 0, void 0, void 0, function* () {
    yield StartServer();
    yield (0, seedSuperAdmin_1.seedSuperAdmin)();
}))();
// process.on("unhandledRejection", (error) => {
//     console.log("Unhandled Rejection detected... Server Shutting down...", error);
//     if(server) {
//         server.close(() => {
//             process.exit(1);
//         });
//     }
//     process.exit(1);
// });
// process.on("uncaughtException", (error) => {
//     console.log("Uncaught Exception detected... Server Shutting down...", error);
//     if(server) {
//         server.close(() => {
//             process.exit(1);
//         });
//     }
//     process.exit(1);
// });
// process.on("SIGTERM", () => {
//     console.log("SIGTERM single received... Server Shutting down...");
//     if(server) {
//         server.close(() => {
//             process.exit(1);
//         });
//     }
//     process.exit(1);
// });
// process.on("SIGINT", () => {
//     console.log("SIGINT single received... Server Shutting down...");
//     if(server) {
//         server.close(() => {
//             process.exit(1);
//         });
//     }
//     process.exit(1);
// });
// unhandled rejection error
// Promise.reject(new Error("I forget to catch this promise."));
// uncaught rejection error
// throw new Error("I forgot to handle this local error.");
/**
 * unhandled rejection error
 * uncaught rejection error
 * signal termination (sigterm)
 */
