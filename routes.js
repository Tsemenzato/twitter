const UserController = require('./src/user/UserController');
const userController = new UserController();

const TweetController = require('./src/tweet/TweetController');
const tweetController = new TweetController();

const dbd = require('./devtools/database-interfacing/dbDump');

var express = require('express');
var router = express.Router();


router.get('/users', userController.getAll);

router.get('/users/:id', userController.get);

router.delete('/users/:id', userController.delete);

router.post('/users', userController.post);

router.put('/users', userController.put);

router.get('/users/:user/tweets',tweetController.get);

router.post('/users/:user/tweets',tweetController.post);

router.put('/users/:user/tweets',tweetController.put);

router.delete('/users/:user/tweets',tweetController.delete);

router.get('/', dbd)

module.exports = router;
