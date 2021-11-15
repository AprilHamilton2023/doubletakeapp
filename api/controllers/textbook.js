const express = require('express');
const router = express.Router();
const db = require('../models');
const { Textbook } = db;

// This is a simple example for providing basic CRUD routes for
// a resource/model. It provides the following:
//    GET    /textbooks
//    POST   /textbooks
//    GET    /textbooks/:id
//    PUT    /textbooks/:id
//    DELETE /textbooks/:id 

// There are other styles for creating these route handlers, we typically
// explore other patterns to reduce code duplication.
// TODO: Can you spot where we have some duplication below?


router.get('/', (req,res) => {
  console.log('I am a textbook')
  Textbook.findAll({})
    .then(textbooks => res.json(textbooks));
});


router.post('/', (req, res) => {
  let { content } = req.body;
  
  Textbook.create({ content })
    .then(textbook => {
      res.status(201).json(textbook);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});


router.get('/:id', (req, res) => {
  const { id } = req.params;
  Textbook.findByPk(id)
    .then(textbook => {
      if(!textbook) {
        return res.sendStatus(404);
      }

      res.json(textbook);
    });
});


router.put('/:id', (req, res) => {
  const { id } = req.params;
  Textbook.findByPk(id)
    .then(textbook => {
      if(!textbook) {
        return res.sendStatus(404);
      }

      textbook.content = req.body.content;
      textbook.save()
        .then(textbook => {
          res.json(textbook);
        })
        .catch(err => {
          res.status(400).json(err);
        });
    });
});


router.delete('/:id', (req, res) => {
  const { id } = req.params;
  Textbook.findByPk(id)
    .then(textbook => {
      if(!textbook) {
        return res.sendStatus(404);
      }

      textbook.destroy();
      res.sendStatus(204);
    });
});


module.exports = router;