const express = require("express");

const app = express();

app.get("/api", (req, res) => {
  res.send("Hello World, this is CD/CI!!");
});

app.listen(5000, () => {
  console.log("Server is running on PORT 5000!!");
});
