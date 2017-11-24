const TweetModel = require('./TweetModel.js');
const tweetModel = new TweetModel();

module.exports = class TweetService {
	initTweets(user){
      tweetModel.post(`T${user}`,JSON.stringify([{
         "date" : "123123",
         "text" : "Welcome to truquitter"
      }]))
   }

	 get(id){
		  return tweetModel.get(`T${id}`);
	 }

	 post(user,text){
		  let date = new Date();
		  return tweetModel.get(`T${user}`)
				.then(function(tweets){
					 tweets = JSON.parse(tweets);
					 tweets.push({
						  "date" : date,
						  "tweet" : text
					 })
					 return tweetModel.post(`T${user}`, JSON.stringify(tweets))
				})
	 }

	 put(user,tweet,text){
        let date = new Date();
       return tweetModel.get(`T${user}`)
            .then(function(tweets){
                let parsedTweets = JSON.parse(tweets)
                for (let i = 0; i < parsedTweets.length; i++){
                    if (parsedTweets[i]["date"] == tweet) {
                        parsedTweets[i]["text"] = text;
                        parsedTweets[i]["date"] = date
                    }                    
                }
               return tweetModel.put(`T${user}`, JSON.stringify(parsedTweets))
            })
            .then(function(){
                return tweetModel.get(`T${user}`)
            })
	}
	
		 
   get(id){
      return tweetModel.get(`T${id}`);
	}
	 
}