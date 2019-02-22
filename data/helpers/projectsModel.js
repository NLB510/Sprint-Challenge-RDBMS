const db = require("../dbConfig");

module.exports = {
  getProjects,
  getProjectsById,
  getProjectActions
};

function getProjects() {
  return db("projects");
}




function getProjectsById(id) {
  const promises = [getProjectById(id), getProjectActions(id)]

  return Promise.all(promises).then(function(results) {
    let [project, actions] = results
    project.actions = actions
    return project
  })


}

function getProjectActions(id) {
  return db("actions").where("project_id", id)
  .then(project => {
    return project
  })
}

function getProjectById(id) {
  return db("projects")
    .where("projects.id", id)
    .first();
}