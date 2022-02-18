const db = require("../../data/dbConfig");

// //{
//     "project_id":1,
//     "project_name":"bar",
//     "project_description":null,
//     "project_completed":false}]`

function getAll() {
  return db("projects as p").select("p.*").count("p.project_completed as project_completed");
}

const create = (project) => {
  return db("projects").insert(project);
  // .then(([id]) => getById(id));
};

module.exports = {
  getAll,
  create,
};
