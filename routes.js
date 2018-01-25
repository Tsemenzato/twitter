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

const dbd = require('./devtools/database-interfacing/dbDump');

var express = require('express');
var router = express.Router();
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:8082');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
}
router.use(allowCrossDomain);

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


router.get('/', function(req, res){
    res.sendFile('/home/nan-tomas/learning/Twitter/angularitter/app/views/index.html')
})

router.get('/dbd', dbd)


module.exports = router;
