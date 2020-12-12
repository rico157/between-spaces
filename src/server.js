const express = require("express");
const app = express();
const robot = require("kbm-robot");

robot.startJar();

const send = (key) =>
  robot.press("CTRL").press(key).release(key).release("CTRL").go();

app.use(express.static(__dirname + "/client"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/client/index.html");
});

app.get("/up", (req, res) => {
  send("up").then(() => res.sendStatus(200));
});

app.get("/right", (req, res) => {
  send("right").then(() => res.sendStatus(200));
});

app.get("/left", (req, res) => {
  send("left").then(() => res.sendStatus(200));
});

module.exports = app;
