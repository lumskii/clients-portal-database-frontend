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
const expenseRouter = require("./routers/expense.router");
const salesRouter = require("./routers/sales.router");
const fs = require("fs")
const ImageModel = require('./models/Uploads')

const app = express();

// Uploading images
const multer = require("multer")
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'images')
  },
  filename: (req, file, cb) => {
    console.log(file)
    cb(null, Date.now() + path.extname(file.originalname))
  }
})

const upload = multer({storage: storage})
//authentication
const cors = require('cors')
app.use(cors());

// Set body bodyParser

app.use(logger("dev"));
app.use(express.json());

//Load routers
const userRouter = require("./routers/user.router");

//Use Routers
app.use("/v1/user", userRouter);
app.use("/v1/clients", clientRouter);
app.use("/v1/expenses", expenseRouter);
app.use("/v1/sales", salesRouter);

app.post("/v1/upload", upload.single('avatar'), (req, res) => {
  const saveAvatar = new ImageModel({
    name: req.body.name,
    img:{
      data: fs.readFileSync('images/' + req.file.filename),
      contentType:"image/png"
    }
  });
  saveAvatar.save()
  .then((res) => {
    console.log("Image Uploaded");
})
  .catch((err) => {
    console.log(err, "An error has occured");
  })
  res.send("Image Uploaded")
});

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

//fetching title link
app.get("/titles", getAllTitles);



// Start server...
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on ${PORT}`));
