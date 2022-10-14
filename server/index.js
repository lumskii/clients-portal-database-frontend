const express = require("express");
const mongoose = require("mongoose");
const colors = require("colors");
const dotenv = require("dotenv");
const logger = require("morgan");
const {
  getAllTitles,
  addNewTitles,
} = require("./controllers/titles.controller");

const app = express();
dotenv.config();

// Set body bodyParser

app.use(logger("dev"));
app.use(express.json());

//Load routers
const userRouter = require("./src/routers/user.router")
const clientRouter = require("./src/routers/client.router");
const { insertClient } = require("./controllers/Client.controller");

//Use Routers
app.use("/v1/user", userRouter)
app.use("/v1/client", clientRouter)

// Connect to MongoDB...
let mongoDB = process.env.MONGODB_URL;

mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on("error", () => {
  console.log("> MongoDB Connection Error...".red);
});
db.once("open", () => {
  console.log(`> Successfully Connected the database`.blue);
});

app.get("/", (req, res) => {
  res.json({
    status: 200,
    message: "Success",
  });
});

app.get("/titles", getAllTitles);
app.post("/titles", addNewTitles);
app.post("/clients", insertClient);

// Start server...
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on ${PORT}`));
