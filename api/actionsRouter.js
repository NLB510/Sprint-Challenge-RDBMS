const express = require('express');

const db = require('../data/helpers/actionsModel');


const router = express.Router()

// GET

router.get('/', (req, res) => {
  db.getActions()
  .then(actions => {
    res.status(200).json(actions)
  })
  .catch(err => {
    res.status(500).json({
      error: "There was an error retrieving actions from the database"
    })
  })
})


router.get('/:id', (req, res) => {
  const {id} = req.params;
  
  db.getActionById(id)
  .then(action => {
    if (!action) {
      return res.status(404).json({
        errorMessage: "The action with the specified id does not exist"
      })
    } else {
      res.status(200).json(action)
    }
  })
  .catch(err => {
    res.status(500).json({
      error: "There was a error retrieving the action from the database."
    })
  })
})



//POST

router.post("/", (req, res) => {
  const { name, project_id, description, notes } = req.body;

  if (!name || !project_id || !notes || !description) {
    return res.status(400).json({
      errorMessage: "Please add all required fields to create an action"
    });
  } else {
    db.addAction(req.body)
      .then(action => {
        res.status(201).json({
          message: "Action added successfully",
          action
        });
      })
      .catch(err => {
        res.status(500).json({
          error: "There was an error add the action to the database"
        });
      });
  }
});






module.exports = router;