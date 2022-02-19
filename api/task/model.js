// build your `Task` model here
const db = require("../../data/dbConfig");

const getAll = async () => {
  const rows = await db("tasks as t")
    .leftJoin("projects as p", "t.project_id", "p.project_id")
    .select(
      "task_description",
      "task_notes",
      "task_completed",
      "project_name",
      "project_description"
    );

  const result = rows.map((row) => {
    if (row.task_completed === 1) {
      return { ...row, task_completed: true };
    } else if (row.task_completed === 0) {
      return { ...row, task_completed: false };
    }
  });

  return result;
};

const create = async (task) => {
  const newTask = await db("tasks")
    .insert(task)
    .then(([task_id]) => {
      return db("tasks").where("task_id", task_id).first();
    });
  if (newTask.task_completed === 0) {
    return { ...newTask, task_completed: false };
  } else {
    return { ...newTask, task_completed: true };
  }
};

module.exports = {
  getAll,
  create,
};
