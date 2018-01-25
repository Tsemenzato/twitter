const FeedService = require('./FeedService');
var feedService = new FeedService();

module.exports = class FeedController {
    get(req, res){
        feedService.get(req.params.user)
        .then(function(feed){
            res.json(feed);
            res.send();
        })
    }
}