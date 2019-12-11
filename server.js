const express = require("express");
const helmet = require("helmet");

const server = express();

// implementing middleware or use-ing middleware
server.use(express.json());
server.use(helmet())
server.use(logger)

server.get("/", (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

//custom middleware

// api built
server.listen(4000, () => {
  console.log("\n*** Server Running on http://localhost:4000 ***\n");
});

// logger middleware
function logger(req, res, next) {
console.log(`${} - ${} - ${}`)
}



module.exports = server;
