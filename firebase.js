const admin = require("firebase-admin")
const serviceAccount = require("./twilightimperiumhelperdatabase-firebase-adminsdk-fbsvc-d8e999b7e4.json")

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
const db = admin.firestore();
module.exports = db