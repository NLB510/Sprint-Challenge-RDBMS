const db = require("../dbConfig");

module.exports = {
  getProjects,
  addProject,
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
    project.actions = actions.map(action => ({
        ...action,
        completed: action.completed === 0 ? false : true, 
      }))
    
    const result = {
      ...project, 
      completed: project.completed === 0 ? false : true, 
      
    }


    return result
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



function addProject(project) {
  return db('projects')
  .insert(project)
  .then(([id]) => getProjectById(id))
}