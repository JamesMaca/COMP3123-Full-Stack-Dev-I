const express = require("express");
const booksRoutes = require("./routes/books");
const mongoose = require("mongoose");

const app = express();

const SERVER_PORT = 3001;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const DB_CONNECTION_STRING =
  "mongodb+srv://jjmm:Leafs12345@cluster0.kzivlod.mongodb.net/COMP31223FULLSTACK?retryWrites=true&w=majority";

mongoose.connect(DB_CONNECTION_STRING, {
  // userNewUriParser: true,
  // userUnifiedTopology: true
});

app.use("/library", booksRoutes);

app.route("/").get((req, res) => {
  res.send("<h1>MogoDB + Mongoose Example</h1>");
});

app.listen(SERVER_PORT, () => {
  console.log(`Server running at http://localhost:${SERVER_PORT}/`);
});
