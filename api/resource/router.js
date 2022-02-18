// build your `/api/resources` router here
const router = require("express").Router();
const Resources = require("./model");

router.get("/", (req, res, next) => {
  Resources.getAll()
    .then((tasks) => {
      res.json(tasks);
    })
    .catch(next);
});

router.post("/", (req, res, next) => {
  const newResource = req.body;

  Resources.create(newResource)
    .then((resource) => {
      res.status(201).json(resource);
    })
    .catch(next);
});

module.exports = router;
