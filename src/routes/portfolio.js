const express = require("express");
const { showPortfolio } = require("../controllers/portfolioController");

const router = express.Router();

router.get("/portfolio", showPortfolio);

module.exports = router;
