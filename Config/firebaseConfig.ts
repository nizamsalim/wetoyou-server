const admin = require("firebase-admin");

export default function firebaseConfig(firebaseSecret: string) {
  admin.initializeApp({
    credential: admin.credential.cert(JSON.parse(firebaseSecret)),
  });
}
