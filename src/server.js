const server = require("express")();
const ks = require("node-key-sender");
ks.setOption("globalDelayPressMillisec", 0);
const send = (key) => ks.sendCombination(["control", key]);

server.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

server.get("/up", (req, res) => {
  send("up").then(() => res.send("<h1>Hello world</h1>"));
});

server.get("/right", (req, res) => {
  send("right").then(() => res.send("<h1>Hello world</h1>"));
});

server.get("/left", (req, res) => {
  send("left").then(() => res.send("<h1>Hello world</h1>"));
});

module.exports = server;
