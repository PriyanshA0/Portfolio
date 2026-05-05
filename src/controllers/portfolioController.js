const projects = require("../data/projects");
const skills = require("../data/skills");
const socials = require("../data/socials");

const profile = {
  name: "Your Name",
  headline: "Builder exploring AI and real-world impact",
  role: "Full-stack Developer",
  location: "Your City, Country",
  avatar: "/img/profile.jpg",
  chips: ["Available for work", "AI · Web · Tools"],
  about: [
    "I'm a builder who's still figuring things out, but doing it by creating along the way.",
    "I enjoy working at the intersection of AI and real-world impact.",
    "Curious about how technology shapes people and behavior."
  ],
  education: [
    { school: "Your University", degree: "B.Tech / B.Sc", years: "2020—2024" }
  ],
  interests: ["Coding", "Music", "Travel"]
};

const showPortfolio = (req, res) => {
  const featuredProjects = projects.filter((project) => project.featured);

  res.render("portfolio", {
    pageTitle: `${profile.name} | Portfolio`,
    activePage: "portfolio",
    skills,
    socials,
    featuredProjects,
    projects,
    profile,
  });
};

module.exports = { showPortfolio };
