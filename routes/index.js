var express = require('express');
var router = express.Router();
//require mysql2
const mysql = require('mysql2');
//require models
const models = require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//add a get() route for specificActor using findOne method
router.get('/specificActor', function(req, res, next) {
  models.actor.findOne({
    where: {
      Actor_id: 5
    }
  })
  .then(actor=> {
    res.render('specificActor', {
      actor: actor
    });
  });
});

module.exports = router;
