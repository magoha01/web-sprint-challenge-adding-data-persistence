const router = require("express").Router();
const Projects = require("./model");

router.get("/", (req, res, next) => {
  Projects.getAll()
    .then((projects) => {
      res.json(projects);
    })
    .catch(next);
});

router.post("/", (req, res, next) => {
  const newProject = req.body;

  Projects.create(newProject)
    .then((project) => {
      res.status(201).json(project);
    })
    .catch(next);

});

module.exports = router;

