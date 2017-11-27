const FollowersService = require('./../followers/FollowersService')
const TweetService =  require('./../tweet/TweetService')
const UserService = require('./../user/UserService')
const followers = new FollowersService();
const tweets = new TweetService();
const users = new UserService();

module.exports = function(user){
followers.getFollowed(user)
}