const TweetService = require('./TweetService');
const tweetService = new TweetService();

module.exports = class TweetController {

    get(req, res){
        tweetService.get(req.params.user)
            .then(function(tweetList){
                res.json(tweetList)
            })
            .catch(console.error)
    }   
}