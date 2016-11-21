const express = require('express');
const router = express.Router();

const Event = require('../models/event');

router.route('/')
  .get((req, res) => {
    Event.find({}, (err, events) => {
      res.status(err ? 400 : 200).send(err || events);
    })
  })
  .post((req, res) => {
    Event.create(req.body, (err, newEvent) => {
      res.status(err ? 400 : 200).send(err || newEvent);
    })
  });

router.route('/:id')
  .get((req, res) => {
    Event.findById(req.params.id, (err, event) => {
      res.status(err ? 400 : 200).send(err || event);
    })
  })
  .delete((req, res) => {
    Event.findByIdAndRemove(req.params.id, (err, deletedEvent) => {
      res.status(err ? 400 : 200).send(err || 'Event deleted.');
    })
  })
  .put((req, res) => {
    Event.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true}, (err, updatedEvent) => {
      res.status(err ? 400 : 200).send(err || updatedEvent);
    })
  });
