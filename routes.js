const UserController = require('./src/user/UserController');
const userController = new UserController();

const TweetController = require('./src/tweet/TweetController');
const tweetController = new TweetController();

const FollowersController = require('./src/followers/FollowersController')
const followersController = new FollowersController();

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

router.post('/users/:user/followed', followersController.follow)

router.delete('/users/:user/followed', followersController.unfollow)

router.delete('/users/:user/tweets',tweetController.delete);

router.get('/', dbd)

module.exports = router;
