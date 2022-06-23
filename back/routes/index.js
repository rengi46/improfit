//import files
const imageRouter = require("./image-router");
const commentsRouter = require("./comments-router");
const imageListRouter = require("./imageList-router");


const routes = (server) => {
  server.use(
    imageListRouter,
    imageRouter,
    commentsRouter
  );
};

module.exports = routes;