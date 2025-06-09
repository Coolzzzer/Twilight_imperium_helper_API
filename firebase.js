const admin = require("firebase-admin")
const serviceAccount = require("./twilightimperiumhelperdatabase-firebase-adminsdk-fbsvc-c7044a3efe.json")

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
const db = admin.firestore();
module.exports = db;