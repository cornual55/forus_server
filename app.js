const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.end("<h1>Привет, Октагон!</h1>");
});
app.listen(3000);