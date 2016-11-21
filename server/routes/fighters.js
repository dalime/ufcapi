const express = require('express');
const router = express.Router();

const Fighter = require('../models/fighter');

router.route('/')
  .get((req, res) => {
    Fighter.find({}, (err, fighters) => {
      res.status(err ? 400 : 200).send(err || fighters);
    })
  })
  .post((req, res) => {
    Fighter.create(req.body, (err, newFighter) => {
      res.status(err ? 400 : 200).send(err || newFighter);
    })
  })

router.route('/:id')
  .get((req, res) => {
    Fighter.findById(req.params.id, (err, fighter) => {
      res.status(err ? 400 : 200).send(err || fighter);
    })
  })
  .delete((req, res) => {
    Fighter.findByIdAndRemove(req.params.id, (err, success) => {
      res.status(err ? 400 : 200).send(err || 'Fighter deleted.');
    })
  })
  .put((req, res) => {
    Fighter.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true}, (err, updatedFighter) => {
      res.status(err ? 400 : 200).send(err || updatedFighter);
    })
  });
