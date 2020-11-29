const express = require("express");
const app = express();
const ks = require("node-key-sender");
ks.setOption("globalDelayPressMillisec", 0);
const send = (key) => ks.sendCombination(["control", key]);

app.use(express.static(__dirname + "/"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/up", (req, res) => {
  send("up").then(() => res.send("<h1>Hello world</h1>"));
});

app.get("/right", (req, res) => {
  send("right").then(() => res.send("<h1>Hello world</h1>"));
});

app.get("/left", (req, res) => {
  send("left").then(() => res.send("<h1>Hello world</h1>"));
});

module.exports = app;
