const express = require("express");
const path = require("path");

const setupStatic = (app, publicPath) => {
  const root = publicPath || path.join(__dirname, "../../public");

  app.use("/assets", express.static(path.join(root, "assets")));
  app.use("/img", express.static(path.join(root, "img")));
  app.use("/icons", express.static(path.join(root, "icons")));
  app.use(express.static(root));
};

module.exports = setupStatic;
