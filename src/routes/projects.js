const express = require("express");
const {
  listProjects,
  showProjectDetails,
} = require("../controllers/projectsController");

const router = express.Router();

router.get("/projects", listProjects);
router.get("/project/:slug", showProjectDetails);

module.exports = router;
