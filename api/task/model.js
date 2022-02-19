// build your `Task` model here
const db = require("../../data/dbConfig");

function getAll() {
  return db("tasks as t").select('t.*');
}

const create = (task) => {
  return db("tasks").insert(task);
  // .then(([id]) => getById(id));
};

module.exports = {
  getAll,
  create,
};
