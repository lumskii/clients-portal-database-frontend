if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require("express");
const mongoose = require("mongoose");
const colors = require("colors/safe");
const logger = require("morgan");
const path = require('path');
const {
  getAllTitles
} = require("./controllers/titles.controller");
const clientRouter = require("./routers/client.router");

const app = express();

// Set body bodyParser

app.use(logger("dev"));
app.use(express.json());

//Load routers
const userRouter = require("./routers/user.router");

//Use Routers
app.use("/v1/user", userRouter);
app.use("/v1/clients", clientRouter);

// Connect to MongoDB...
let mongoDB = process.env.MONGODB_URL;

mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on("error", () => {
  console.log(colors.red("> MongoDB Connection Error..."));
});
db.once("open", () => {
  console.log(colors.blue(`> Successfully Connected the database`));
});

app.get("/", (req, res) => {
  res.json({
    status: 200,
    message: "Success",
  });
});

app.get("/titles", getAllTitles);


// Start server...
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on ${PORT}`));
