const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  let age = 20;
  try {
    if (age <= 18) {
      throw new Error("Age is not valid");
    }
    res.send("Welcome to the application");
  } catch (error) {
    next(error);
  }
});

app.use((req, res) => {
  res.status(404).send({
    success: false,
    message: "Page not found",
  });
});

app.use((err, req, res, next) => {
  res.status(500).send({
    success: false,
    message: err.message,
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
