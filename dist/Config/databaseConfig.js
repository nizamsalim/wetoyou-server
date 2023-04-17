"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
function connectDatabase(uri) {
    (0, mongoose_1.set)("strictQuery", true);
    return new Promise((resolve, reject) => {
        (0, mongoose_1.connect)(uri, (err) => {
            if (err) {
                reject(false);
            }
            else {
                console.log("db connected");
                resolve(true);
            }
        });
    });
}
exports.default = connectDatabase;
