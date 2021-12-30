const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("its working");
});

const PORT = process.env.PORT || 9300;

app.listen(PORT, console.log("its running"));
