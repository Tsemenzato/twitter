const FollowedService = require('./../followed/FollowedService');
var followed = new FollowedService;

const TweetService = require('./../tweet/TweetService');
var tweets = new TweetService();

const UserService = require('./../user/UserService');
var users = new UserService();

module.exports = class FeedService {
    get(user) {
        let resultingTweetList = []
    return followed
            .get(user)
            .then((plainUsersFollowed) => JSON.parse(plainUsersFollowed))
            .then((usersFollowed) => Promise.all( usersFollowed.map((x) => tweets.get(x).then((tweet) => [tweet , x])))) // [promise, promise, promise]
            .then((tweetsWithUser) => {
            for (let i = 0; i < tweetsWithUser.length; i++){
                (tweetsWithUser[i].map((x) => {
                    Array.prototype.map.call(JSON.parse(x), (y) => {
                    y.user = tweetsWithUser[i][1];
                    resultingTweetList.push(y) 
                 })
                }))
            }
            })
            .then(() => 
                resultingTweetList.reduce((previous, current) => previous.concat(current), [])
            ) // [[t1,t2,t3], [t1]]
            .then((tweets) => tweets.sort((a,b) => new Date(b.date) - new Date(a.date))) // [t1,t2,t3,t1]
            .catch(console.log)
     }
}
