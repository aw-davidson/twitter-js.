const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets, showForm: true } );
});

router.get('style.css', function (req, res) {
  res.sendFile('style.css')
});

router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  var tweets = tweetBank.find( {name: name} );
  res.render( 'index', {tweets: tweets, showForm: true, name: name});
});

router.get('/tweets/:id', function(req, res){
  var id = +req.params.id;
  var tweets = tweetBank.find( { id: id, showForm: false} );
  res.render('index', {tweets: tweets});
});

router.post('/tweets', function(req, res) {
  var name = req.body.name;
  var text = req.body.text;
  tweetBank.add(name, text);
  res.redirect('/');
});

module.exports = router;
