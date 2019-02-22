const db = require("../dbConfig");

module.exports = {
  addAction
};


function getActionById(id) {
  return db("actions")
    .where("actions.id", id)
    .first();
}


function addAction(action) {
  return db("actions")
    .insert(action)
    .then(([id]) => getActionById(id));
}