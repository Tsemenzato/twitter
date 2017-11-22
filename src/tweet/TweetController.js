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
    
    post(req,res){
        tweetService.post(req.params.user, req.body.text)
            .then(function(){
                res.status(201);
                res.location(`/user/${req.body.user}/tweets`);
                res.send()
            })
            .catch(function(error){
                res.status(400);
                console.log(error);
                res.send()
            })
    }
}