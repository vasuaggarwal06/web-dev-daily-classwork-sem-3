const express = require("express");
const app = express();
const morgan = require("morgan");
const PORT = 3000;

app.use(morgan("tiny"));

const logmiddleware = (req, res, next) => {
  console.log("Request Method:", req.method);
  console.log("Request URL:", req.url);
  console.log("Request Time:", new Date().toLocaleString());
  next(); // what if i dont give next() here? => it will not go to the next middleware or route handler
};

const apicheckmiddleware = (req, res, next) => {
  if (req.query.API_KEY == "12345") {
    console.log("API key is valid");
  } else {
    res.status(401).send("unauthorized: API key is missing or invalid");
  }
  next();
};
app.use(logmiddleware);
// app.use(apicheckmiddleware);

app.get("/", (req, res) => {
  res.send("Hello World");
  console.log("hello world");
});

app.get("/students", apicheckmiddleware, (req, res) => {
  console.log("hello students");
  res.send("Hello Students");
});

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
