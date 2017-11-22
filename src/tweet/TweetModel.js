const db = require('../../config/db.js')

module.exports = class TweetModel {
  
    get(key){
        return db.get(key)
        .then(function(tweets){
            return tweets.toString()
        })
    }

}