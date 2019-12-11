const express = require("express");

const server = express();

// implementing middleware or use-ing middleware
server.use(express.json());

server.get("/", (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

//custom middleware
server.listen(4000, () => {
  console.log("\n*** Server Running on http://localhost:4000 ***\n");
});

function logger(req, res, next) {}

module.exports = server;
