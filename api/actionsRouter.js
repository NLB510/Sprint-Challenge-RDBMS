const express = require('express');

const db = require('../data/helpers/actionsModel');


const router = express.Router()


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