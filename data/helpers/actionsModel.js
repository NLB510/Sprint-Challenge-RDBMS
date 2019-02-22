const db = require("../dbConfig");

module.exports = {
  getActions,
  addAction,
  getActionById
};

function getActions() {
  return db("actions")
  .then(actions => {
    const results = actions.map(action => {
      return {
        ...action,
        completed: action.completed === 0 ? false : true
      }
    })

    return results

  })
}

function getActionById(id) {
  return db("actions")
    .where("actions.id", id)
    .first()
    .then(action => {
      const result = {
        ...action,
        completed: action.completed === 0 ? false : true
      };

      return result;
    });
}

function addAction(action) {
  return db("actions")
    .insert(action)
    .then(([id]) => getActionById(id));
}
