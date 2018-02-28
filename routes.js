const UserController = require('./src/user/UserController');
const userController = new UserController();

const TweetController = require('./src/tweet/TweetController');
const tweetController = new TweetController();

const FollowersController = require('./src/followers/FollowersController')
const followersController = new FollowersController();

const FollowedController = require('./src/followed/FollowedController')
const followedController = new FollowedController();

const FeedController = require('./src/feed/FeedController');
const feedController = new FeedController();

const LoginController = require('./src/user/LoginController')
const loginController = new LoginController();

const dbd = require('./devtools/database-interfacing/dbDump');

const express = require('express');
var router = express.Router();

const path = require('path');


router.get('/users', userController.getAll);

router.get('/users/:id', userController.get);

router.delete('/users/:id', userController.delete);

router.post('/users', userController.post);

router.put('/users', userController.put);



router.get('/users/:user/tweets',tweetController.get);

router.post('/users/:user/tweets',tweetController.post);

router.put('/users/:user/tweets',tweetController.put);

router.delete('/users/:user/tweets',tweetController.delete);




router.post('/users/:user/followed', followersController.follow.bind(followersController))

router.delete('/users/:user/followed', followersController.unfollow.bind(followersController))

router.get('/users/:user/followers', followersController.get.bind(followersController))

router.get('/users/:user/followed', followedController.get.bind(followedController))


router.get('/users/:user/feed', feedController.get)

router.get('/login/:username', loginController.login)

router.get('/dbd', dbd);

router.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});



module.exports = router;
