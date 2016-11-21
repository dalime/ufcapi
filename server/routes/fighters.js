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

router.put('/:fighterId/addWin/:opponentId', (req, res) => {
  Fighter.findByIdAndUpdate(req.params.fighterId, {$addToSet: {'wins': req.params.opponentId} }, {new: true}, (err, updatedFighter) => {
    res.status(err ? 400 : 200).send(err || updatedFighter);
  })
});

router.put('/:fighterId/removeWin/:opponentId', (req, res) => {
  Fighter.findByIdAndUpdate(req.params.fighterId, {$pull: {'wins': req.params.opponentId} }, {new: true}, (err, updatedFighter) => {
    res.status(err ? 400 : 200).send(err || updatedFighter);
  })
});

router.put('/:fighterId/addLoss/:opponentId', (req, res) => {
  Fighter.findByIdAndUpdate(req.params.fighterId, {$addToSet: {'losses': req.params.opponentId} }, {new: true}, (err, updatedFighter) => {
    res.status(err ? 400 : 200).send(err || updatedFighter);
  })
});

router.put('/:fighterId/removeLoss/:opponentId', (req, res) => {
  Fighter.findByIdAndUpdate(req.params.fighterId, {$pull: {'losses': req.params.opponentId} }, {new: true}, (err, updatedFighter) => {
    res.status(err ? 400 : 200).send(err || updatedFighter);
  })
});

router.put('/:fighterId/addDraw/:opponentId', (req, res) => {
  Fighter.findByIdAndUpdate(req.params.fighterId, {$addToSet: {'draws': req.params.opponentId} }, {new: true}, (err, updatedFighter) => {
    res.status(err ? 400 : 200).send(err || updatedFighter);
  })
});

router.put('/:fighterId/removeDraw/:opponentId', (req, res) => {
  Fighter.findByIdAndUpdate(req.params.fighterId, {$pull: {'draws': req.params.opponentId} }, {new: true}, (err, updatedFighter) => {
    res.status(err ? 400 : 200).send(err || updatedFighter);
  })
});

router.put('/:figherId/addTeam/:teamId', (req, res) => {
  Fighter.findByIdAndUpdate(req.params.fighterId, {$addToSet: {'teams': req.params.teamId} }, {new: true}, (err, updatedFighter) => {
    res.status(err ? 400 : 200).send(err || updatedFighter);
  })
});

router.put('/:figherId/removeTeam/:teamId', (req, res) => {
  Fighter.findByIdAndUpdate(req.params.fighterId, {$pull: {'teams': req.params.teamId} }, {new: true}, (err, updatedFighter) => {
    res.status(err ? 400 : 200).send(err || updatedFighter);
  })
});

router.put('/:figherId/addEvent/:teamId', (req, res) => {
  Fighter.findByIdAndUpdate(req.params.fighterId, {$addToSet: {'events': req.params.teamId} }, {new: true}, (err, updatedFighter) => {
    res.status(err ? 400 : 200).send(err || updatedFighter);
  })
});

router.put('/:figherId/removeEvent/:teamId', (req, res) => {
  Fighter.findByIdAndUpdate(req.params.fighterId, {$pull: {'events': req.params.teamId} }, {new: true}, (err, updatedFighter) => {
    res.status(err ? 400 : 200).send(err || updatedFighter);
  })
});
