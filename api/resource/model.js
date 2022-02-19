// build your `Resource` model here
const db = require("../../data/dbConfig");

//`[{"resource_id":1,"resource_name":"foo","resource_description":null}]`;

function getAll() {
  return db("resources as r").select("resource_id", "resource_name", "resource_description");
}

const create = (resource) => {
  return db("resources").insert(resource);
   
};

module.exports = {
  getAll,
  create,
};