// build your `/api/tasks` router here
const router = require("express").Router();
const Tasks = require("./model");

router.get("/", (req, res, next) => {
    Tasks.getAll()
        .then(tasks => {
            res.json(tasks)
        }) .catch(next)
});


router.post("/", (req, res, next) => {
  const newTask = req.body;

  Tasks.create(newTask)
    .then((task) => {
      res.status(201).json(task);
    })
    .catch(next);
});

module.exports = router;
