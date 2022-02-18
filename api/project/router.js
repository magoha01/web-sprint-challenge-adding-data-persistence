// build your `/api/projects` router here
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

//  const result = {
//    project_id: rows[0].project_id,
//    project_name: rows[0].project_name,
//    project_description: rows[0].project_description,
//    //project_completed: rows[0].project_completed < 1 ? false : true,
//  };
//  return result;
