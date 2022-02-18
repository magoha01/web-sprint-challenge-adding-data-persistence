// build your `Resource` model here
const db = require("../../data/dbConfig");

function getAll() {
  return db("resources");
}

const create = (resource) => {
  return db("resources").insert(resource);
  // .then(([id]) => getById(id));
};

module.exports = {
  getAll,
  create,
};