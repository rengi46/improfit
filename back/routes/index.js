const imageRouter = require("./image-router");
const comentsRouter = require("./coments-router");
const imageListRouter = require("./imageList-router");


const routes = (server) => {
    server.use(
        imageListRouter,
        imageRouter,
        comentsRouter
      );
  };

module.exports = routes;