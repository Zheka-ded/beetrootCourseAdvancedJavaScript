import express from "express";
import path from "path";
import mongodb from "mongodb";
import bodyParser from "body-parser";
import dotenv from "dotenv";

import users from "./routes/users";
import auth from "./routes/auth";
import films from "./routes/films";
import authfilms from "./routes/authfilms";

const app = express();

dotenv.config({
  path: path.join(__dirname, ".env")
});
const isDev = app.get("env") === "development";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.use("/api/users", users);
app.use("/api/auth", auth);
app.use("/api/films", films);
app.use("/api/authfilms", authfilms);

const port = process.env.PORT || 4000;
const mongoUrl = `${process.env.DB_CONNECTION}`;

mongodb.MongoClient.connect(mongoUrl, { useNewUrlParser: true })
  .then(client => {
    const db = client.db(process.env.DB_NAME);

    app.set("db", db);

    app.get("/", (req, res) => {
      res.sendFile(path.join(__dirname, "./index.html"));
    });

    // app.get("/api/project__films", (req, res) => {
    app.get("/api/test", (req, res) => {
      // res.json({ mes: "Hello from express" });
      res.json({ mes: "Hello iOld from express" });
    });

    app.listen(port, () => console.log(`Running on localhost:${port}`));
  })
  .catch(err => console.log("Error connect"));



  // https://downloads.mongodb.org/windows/mongodb-shell-windows-x86_64-4.4.2.zip
  // mongodb+srv://iOldUser:QHeD6OzOHSojbgjU@films.twz62.mongodb.net/Films?retryWrites=true&w=majority

  

//   JWT_SECRET=seZGBnJAYfr9zCWhtuLJnKWHe
//   DB_CONNECTION=mongodb+srv://Admin:23121988@films.ibcw7.mongodb.net/Films?retryWrites=true&w=majority
//   DB_NAME=Films
//   
  
  