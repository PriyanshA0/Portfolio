const path = require("path");
const projects = require("../data/projects");

const listProjects = (req, res) => {
  res.render("projects", {
    pageTitle: "Projects | Aditya S",
    activePage: "projects",
    projects,
  });
};

const showProjectDetails = (req, res) => {
  const project = projects.find((item) => item.slug === req.params.slug);

  if (!project) {
    return res
      .status(404)
      .sendFile(path.join(__dirname, "../../public/404.html"));
  }

  return res.render("project", {
    pageTitle: `${project.title} | Aditya S`,
    activePage: "projects",
    project,
  });
};

module.exports = {
  listProjects,
  showProjectDetails,
};
