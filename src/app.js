const express = require("express");
const path = require("path");

const setupStatic = require("./config/static");
const setupViews = require("./config/view");
const { notFound } = require("./controllers/errorController");

const app = express();

setupViews(app);
setupStatic(app);

const publicPath = path.join(__dirname, "../public");
const pagesRoot = path.join(publicPath, "pages");

// Make URLs use `.../index.html` so relative links inside HTML keep working.
app.get("/", (req, res) => {
  res.redirect(301, "/home/index.html");
});

app.get("/about", (req, res) => {
  res.redirect(301, "/about/index.html");
});

app.get("/practice", (req, res) => {
  res.redirect(301, "/practice/index.html");
});

// Legacy/alias routes for "LeetCode" page naming
app.get("/leetcode", (req, res) => {
  res.redirect(301, "/practice/index.html");
});

app.get("/leetcode-practice", (req, res) => {
  res.redirect(301, "/practice/index.html");
});

app.get("/basics", (req, res) => {
  res.redirect(301, "/basics/index.html");
});

app.get("/javascript", (req, res) => {
  res.redirect(301, "/javascript-course/index.html");
});

// Aliases for `.html` URLs referenced by some pages (e.g. `javascript-course/*`).
app.get("/index.html", (req, res) => {
  res.redirect(301, "/home/index.html");
});

app.get("/about.html", (req, res) => {
  res.redirect(301, "/about/index.html");
});

app.get("/practice.html", (req, res) => {
  res.redirect(301, "/practice/index.html");
});

app.get("/leetcode.html", (req, res) => {
  res.redirect(301, "/practice/index.html");
});

app.get("/leetcode-practice.html", (req, res) => {
  res.redirect(301, "/practice/index.html");
});

app.get("/basics.html", (req, res) => {
  res.redirect(301, "/basics/index.html");
});

// Serve your page folders at top-level routes (so `styles.css`, `script.js`,
// and other relative asset links work).
app.use("/home", express.static(path.join(pagesRoot, "home")));
app.use("/about", express.static(path.join(pagesRoot, "about")));
app.use("/practice", express.static(path.join(pagesRoot, "practice")));
app.use("/basics", express.static(path.join(pagesRoot, "basics")));
app.use(
  "/javascript-course",
  express.static(path.join(pagesRoot, "javascript-course"))
);

// Serve project detail pages
const projectMap = {
  "food-share": "food-share",
  "talksy": "talksy",
  "hunter-html-editor": "hunter-html-editor",
  "bubble-pixel": "bubble-pixel",
  "find-monsters": "find-monsters",
  "merge-and-double": "merge-and-double",
  "fun-learn": "fun-learn",
  "html-css-tutorial": "html-css-tutorial",
  "python-guide": "python-guide",
  "cpp-oop": "cpp-oop",
  "preview-generator": "preview-generator"
};

// Support legacy folder-style URLs like `/food_share/details.html`
// by redirecting them to `/projects/<hyphenated-slug>/`.
const projectSlugs = new Set(Object.keys(projectMap));
app.get("/:alias/details.html", (req, res, next) => {
  if (!req.params.alias || !req.params.alias.includes("_")) return next();
  const hyphenSlug = req.params.alias.replace(/_/g, "-");
  if (!projectSlugs.has(hyphenSlug)) return next();
  return res.redirect(301, `/projects/${hyphenSlug}/`);
});

app.get("/:alias/index.html", (req, res, next) => {
  if (!req.params.alias || !req.params.alias.includes("_")) return next();
  const hyphenSlug = req.params.alias.replace(/_/g, "-");
  if (!projectSlugs.has(hyphenSlug)) return next();
  return res.redirect(301, `/projects/${hyphenSlug}/`);
});

Object.entries(projectMap).forEach(([slug, folder]) => {
  app.get(`/projects/${slug}`, (req, res) => {
    res.sendFile(path.join(publicPath, `projects/${folder}/index.html`));
  });
});

// Serve static assets for pages and projects
app.use("/pages", express.static(path.join(publicPath, "pages")));
app.use("/projects", express.static(path.join(publicPath, "projects")));

// Fallback 404
app.use(notFound);

module.exports = app;
