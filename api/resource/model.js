
const db = require("../../data/dbConfig");

function getAll() {
  return db("resources as r").select("resource_id", "resource_name", "resource_description");
}

const create = async (resource) => {
  const newResource = await db("resources")
    .insert(resource)
    .then(([resource_id]) => {
      return db("resources").where("resource_id", resource_id).first();
    });
    return newResource
}

module.exports = {
  getAll,
  create,
};