// post / new group
// get /:id show group
// delete /:id
// patch /:id

const express = require("express");
const router = express.Router();
const Group = require('../../models/Group')
const passport = require('passport');

const validateGroupInput = require('../../validation/groups')

// SINGLE GROUP
router.get('/:id', (req,res) => {
  Group.findById(req.params.id)
      .then(group => res.json(group))
      .catch(err => res.status(404).json({nogroupsfound: 'no group found with id'}))
})


// GREAT NEW GROUP
router.post('/', passport.authenticate('jwt', {session: false}), (req,res) => {
  const {errors, isValid} = validateGroupInput(req.body);

  if (!isValid) {
      return res.status(400).json(errors)
  }

  const generateRandomNumber = () => {
    var minm = 100000;
    var maxm = 999999;
    return Math.floor(Math.random() * (maxm - minm + 1)) + minm;
  }

  const shareCode = generateRandomNumber()

  const newGroup = new Group({
      name: req.body.name,
      shareCode: shareCode,
      users: [req.user.id],
      userGroupCreator: req.user.id
  })

  newGroup.save()
      .then(game => res.json(game))
})

// DELETE GROUP
router.delete('/:id', (req,res) => {
  groupId = `ObjectId(${req.params.id})`
  Group.deleteOne( { "_id" : groupId } )
    .then(res => res.json('hello'))
})


module.exports = router