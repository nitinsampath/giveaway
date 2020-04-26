import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as express from "express";
import * as bodyParser from "body-parser";

var cors = require("cors");

var serviceAccount = require("./giveaway-4989b-4790113c0e4c.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://giveaway-4989b.firebaseio.com"
});

const db = admin.firestore();

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({ origin: true, credentials: true }));

app.get("/", (req, res) => {
  res.send("welcome to homepage");
});

app.post("/raffle/new", async (req, res) => {
  try {
    const newRaffle = req.body;
    const newRaffleRef = await db
      .collection("raffles")
      .doc(newRaffle.raffleName)
      .set(newRaffle);
    if (newRaffleRef) {
      res.status(200).send("resource created");
    } else {
      res.status(404).send("resource NOT created");
    }
  } catch (error) {
    console.error(error);
  }
});

// app.get("/raffles", async (req, res) => {
// get all of raffles in firestore
// });

app.get("/raffle/new", (req, res) => {
  res.send("returned there");
});

// app.listen(9000, "localhost", function() {
//   console.log("The ShoeReview Server Has Started!");
// });

export const webAPI = functions.https.onRequest(app);
