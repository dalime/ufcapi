const express = require('express');
const router = express.Router();

const Character = require('../models/character');

router.route('/')
  .get((req, res) => {
    Character.find({}, (err, characters) => {
      res.status(err ? 400 : 200).send(err || characters);
    })
  })
  .post((req, res) => {
    Character.create(req.body, (err, newCharacter) => {
      res.status(err ? 400 : 200).send(err || newCharacter);
    })
  })

router.route('/:id')
  .get((req, res) => {
    Character.findById(req.params.id, (err, character) => {
      res.status(err ? 400 : 200).send(err || character);
    })
  })
  .delete((req, res) => {
    Character.findByIdAndRemove(req.params.id, (err, success) => {
      res.status(err ? 400 : 200).send(err || 'Character deleted.');
    })
  })
  .put((req, res) => {
    Character.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true}, (err, updatedCharacter) => {
      res.status(err ? 400 : 200).send(err || updatedCharacter);
    })
  });
