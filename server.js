const express = require("express");
const helmet = require("helmet");

const server = express();

// implementing middleware or use-ing middleware
server.use(express.json());
server.use(helmet());
server.use(logger);

server.get("/", (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

//custom middleware

// logger middleware
function logger(req, res, next) {
  console.log(`${req.method} - ${req.url} - ${req.date.now()}`);
}

next();
module.exports = server;

// api built
server.listen(4000, () => {
  console.log("\n*** Server Running on http://localhost:4000 ***\n");
});
