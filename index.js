const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const session = require("express-session");
const sessionConfig = require("./config/sessionConfig");
const router = require("./src/router");
const mongoose = require("mongoose");

const app = express();

const PORT = process.env.PORT || 3001;

const logger = morgan("short");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger);
app.use(cors());
app.use(session(sessionConfig));
app.set("trust proxy", 1);
app.disable("x-powered-by");
app.options("*", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET,PUT,POST,PATCH,DELETE,OPTIONS"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, Content-Length, X-Requested-With"
  );
  res.send(200);
});

mongoose
  .connect("mongodb://127.0.0.1:27017/walteraiden")
  .then(() => console.log("MONGODB CONNECTED SUCCESS"))
  .catch(() => console.log("AN ERROR OCCURED WHEN CONNECTING TO MONGODB"));

app.use("", router);
app.listen(PORT, () => console.log(`APP STARTED ON PORT: ${PORT}`));
