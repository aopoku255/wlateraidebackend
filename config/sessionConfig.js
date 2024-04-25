const sessionConfig = {
  name: "walteraiden",
  saveUninitialized: false,
  resave: false,
  secret: "secrete",
  cookie: {
    secure: true,
    httpOnly: true,
  },
};

module.exports = sessionConfig;
