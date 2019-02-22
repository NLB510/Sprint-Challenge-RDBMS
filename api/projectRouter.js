const express = require("express");

const db = require("../data/helpers/projectsModel");

const router = express.Router();


// GET
router.get('/', (req, res) => {
  db.getProjects()
  .then(projects => {
    res.status(200).json(projects)
  })
  .catch(err => {
    res.status(500).json({
      error: "There was an error retrieving project data from the database."
    })
  })
})


// GET BY ID
router.get('/:id', (req, res) => {
  const {id} = req.params
  
  
  db.getProjectsById(id)
  .then(results => {
    console.log(results)
    res.status(200).json(results)
    
  })
  .catch(err => {
    res.status(500).json({
      error: "There was an error retrieving project data from the database."
    });
  })
})


router.get("/:id/actions", (req, res) => {
  const { id } = req.params;

  db.getProjectActions(id)
    .then(project => {
      res.status(200).json(project);
    })
    .catch(err => {
      res.status(500).json({
        error: "There was an error retrieving project data from the database."
      });
    });
});




// POST

router.post('/', (req, res) => {
  const {name, description} = req.body

  if (!name || !description) {
    return res.status(400).json({
      errorMessage: "Please add a name and description to the project"
    })
  } else {
    db.addProject(req.body)
    .then(project => {
      res.status(201).json({
        message: "Project added successfully", 
        project
      })
    })
    .catch(err => {
      res.status(500).json({
        error: "There was an error add the project to the database"
      })
    })
  }


})




module.exports = router;