const express = require('express');
const router = express.Router();
const db = require('../models');
const { Tutoring } = db;

// This is a simple example for providing basic CRUD routes for
// a resource/model. It provides the following:
//    GET    /tutoring
//    POST   /tutoring
//    GET    /tutoring/:id
//    PUT    /tutoring/:id
//    DELETE /tutoring/:id 

// There are other styles for creating these route handlers, we typically
// explore other patterns to reduce code duplication.
// TODO: Can you spot where we have some duplication below?


router.get('/', (req,res) => {
    Tutoring.findAll({})
    .then(tutoring => res.json(tutoring));
});


router.post('/', (req, res) => {
  let { content } = req.body;
  
  Tutoring.create({ content })
    .then(tutoring => {
      res.status(201).json(tutoring);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});


router.get('/:id', (req, res) => {
  const { id } = req.params;
  Tutoring.findByPk(id)
    .then(tutoring => {
      if(!tutoring) {
        return res.sendStatus(404);
      }

      res.json(tutoring);
    });
});


router.put('/:id', (req, res) => {
  const { id } = req.params;
  Tutoring.findByPk(id)
    .then(tutoring => {
      if(!tutoring) {
        return res.sendStatus(404);
      }

      tutoring.content = req.body.content;
      tutoring.save()
        .then(tutoring => {
          res.json(tutoring);
        })
        .catch(err => {
          res.status(400).json(err);
        });
    });
});


router.delete('/:id', (req, res) => {
  const { id } = req.params;
  Tutoring.findByPk(id)
    .then(tutoring => {
      if(!tutoring) {
        return res.sendStatus(404);
      }

      tutoring.destroy();
      res.sendStatus(204);
    });
});


module.exports = router;