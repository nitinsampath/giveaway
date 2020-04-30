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
const main = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({ origin: true, credentials: true }));

app.get("/", (req, res) => {
  res.send("welcome to homepage");
});

// TODO: CHANGE TO /RAFFLES
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

app.get("/raffles", async (req, res) => {
  // going to need to add user auth, and user ID once implemeneted to get associated raffles.
  // need to add error checking..
  try {
    let response: FirebaseFirestore.DocumentData[] = [];
    await db
      .collection("raffles")
      .get()
      .then(snapshot => {
        snapshot.forEach(raffle => {
          response.push(raffle.data());
          // res.status(200).send(snapshot.data());
        });
      });
    res.status(200).send(response);
  } catch (e) {
    res.status(404).send("unable to complete request");
  }
});

//TO DO: need to add authentication
app.get("/users/:uid", async (req, res) => {
  const uid = req.params.uid;
  try {
    await db
      .collection("users")
      .doc(uid)
      .get()
      .then(snapshot => {
        res.status(200).send(snapshot.data());
      });
  } catch (error) {
    res.status(404).send(error);
  }
});

//creates new user resource in the db
app.post("/users", async (req, res) => {
  try {
    const newUser = req.body.userInfo;
    const newUserRef = await db
      .collection("users")
      .doc(newUser.userID)
      .set(newUser);
    if (newUserRef) {
      res.status(200).send("User created");
    } else {
      res.status(404).send("User NOT created");
    }
  } catch (error) {
    console.log(error);
    res.status(404).send(error);
  }
});

// app.get("/raffle/new", (req, res) => {
//   res.send("returned there");
// });

// app.listen(9000, "localhost", function() {
//   console.log("The ShoeReview Server Has Started!");
// });
main.use(app);
export const webAPI = functions.https.onRequest(main);
