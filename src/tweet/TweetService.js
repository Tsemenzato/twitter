const TweetModel = require('./TweetModel.js');
const tweetModel = new TweetModel();

module.exports = class TweetService {

    get(id){
        return tweetModel.get(`T${id}`);
    }
}