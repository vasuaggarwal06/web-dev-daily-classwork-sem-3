const express = require("express");
const app = express();
const PORT = 3000;
app.get("/students/:id", (req, res) => {
  console.log(req.url);
  console.log(req.method);
  console.log(req.body);
  console.log(req.params.id);
  res.send("hello world");
});

app.get
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
