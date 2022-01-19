const express = require("express");
const cors = require("cors");
const { config } = require("../config");
const router = require("../routes/user.routes");

class Server {
  constructor() {
    this.app = express();
    this.port = config.port;

    //Middlewares
    this.middlewares();
    //Routes
    this.routes();
  }
  middlewares() {
    //CORS
    this.app.use(cors());
    this.app.use(express.json());
    //this.app.use(express.static("public"));
  }

  routes() {
    this.app.use("/api/users", router);
  }

  listen() {
    this.app.listen(this.port, console.log(`Server running at ${this.port}`));
  }
}

module.exports = Server;
