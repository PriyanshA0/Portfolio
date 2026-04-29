const projects = require("../data/projects");
const skills = require("../data/skills");
const socials = require("../data/socials");

const showPortfolio = (req, res) => {
  const featuredProjects = projects.filter((project) => project.featured);

  res.render("portfolio", {
    pageTitle: "Aditya S | Portfolio",
    activePage: "portfolio",
    skills,
    socials,
    featuredProjects,
    projects,
  });
};

module.exports = { showPortfolio };
