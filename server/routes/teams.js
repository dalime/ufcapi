const express = require('express');
const router = express.Router();

const Team = require('../models/Team');

router.route('/')
  .get((req, res) => {
    Team.find({}, (err, teams) => {
      res.status(err ? 400 : 200).send(err || teams);
    })
  })
  .post((req, res) => {
    Team.create(req.body, (err, newTeam) => {
      res.status(err ? 400 : 200).send(err || newTeam);
    })
  });

router.route('/:id')
  .get((req, res) => {
    Team.findById(req.params.id, (err, team) => {
      res.status(err ? 400 : 200).send(err || team);
    })
  })
  .delete((req, res) => {
    Team.findByIdAndRemove(req.params.id, (err, deletedTeam) => {
      res.status(err ? 400 : 200).send(err || 'Team deleted.');
    })
  })
  .put((req, res) => {
    Team.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true}, (err, updatedTeam) => {
      res.status(err ? 400 : 200).send(err || updatedTeam);
    })
  });

module.exports = router;
