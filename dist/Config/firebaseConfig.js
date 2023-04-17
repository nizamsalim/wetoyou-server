"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const admin = require("firebase-admin");
function firebaseConfig(firebaseSecret) {
    admin.initializeApp({
        credential: admin.credential.cert(JSON.parse(firebaseSecret)),
    });
}
exports.default = firebaseConfig;
