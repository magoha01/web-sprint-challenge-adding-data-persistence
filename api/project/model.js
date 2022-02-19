const db = require("../../data/dbConfig");

const getAll = async () => {
  const rows = await db("projects");

  const result = rows.map((row) => {
    if (row.project_completed === 1) {
      return { ...row, project_completed: true };
    } else if (row.project_completed === 0) {
      return { ...row, project_completed: false };
    }
  });
  return result;
};

const getById = async (project_id) => {
  const project = await db("projects").where("project_id", project_id).first();
  return project;
};

const create = async (project) => {
    const newProject = await db('projects')
    .insert(project)
    .then(([project_id]) => {
        return db('projects')
        .where('project_id', project_id)
        .first()
    })
    if(newProject.project_completed === 0) {
        return {...newProject, project_completed: false}
    } else {
        return {...newProject,project_completed: true}
    }
};

module.exports = {
  getAll,
  create,
};
