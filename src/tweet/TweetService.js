const TweetModel = require('./TweetModel.js');
const tweetModel = new TweetModel();

module.exports = class TweetService {

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


	 
}