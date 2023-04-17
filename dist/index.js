"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const cors_1 = __importDefault(require("cors"));
const AuthRouter_1 = __importDefault(require("./Routers/AuthRouter"));
const MasterConfig_1 = __importDefault(require("./Config/MasterConfig"));
// handles all configurations
(0, MasterConfig_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/auth", AuthRouter_1.default);
app.listen(5000, () => {
    console.log("server on 5000");
});
