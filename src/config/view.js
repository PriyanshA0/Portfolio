const path = require("path");

const setupViews = (app, viewsPath) => {
  app.set("view engine", "ejs");
  app.set("views", viewsPath || path.join(__dirname, "../views"));
};

module.exports = setupViews;
