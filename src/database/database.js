const mongoose = require("mongoose");

module.exports = () => {
  return mongoose
    .connect("mongodb://127.0.0.1:27017/walteraiden")
    .then(() => console.log("MONGODB CONNECTED SUCCESS"))
    .catch(() => console.log("AN ERROR OCCURED WHEN CONNECTING TO MONGODB"));
};
