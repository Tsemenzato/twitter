const keys = require('../core/keys');
const UserModel = require('./UserModel.js');
const userModel = new UserModel();

const TweetService = require('./../tweet/TweetService.js');
const tweetService = new TweetService();

const FollowersModel = require('./../followers/FollowersModel');
const followersModel = new FollowersModel();

module.exports = class UserService {

  get(id){
    return userModel.get(id)
  }

  getAll(){
    return userModel.getAll()
  }

  put(id, email, newUsername){
   return userModel.get(id)
      .then(function(user){
        let value = JSON.parse(user)
        if (email) {
          value["email"] = email;
        }
        if (newUsername){
          value["username"] = newUsername;
        }        
        userModel.put(id, JSON.stringify(value))
      })
      .catch(console.error)
  }

  createRootKey(rootKey) {
    return userModel.post(rootKey, 0)
  }

  post(username, email){
    let newKey;
    return userModel.get(keys.user.root)
      .then(function(key){
        newKey = Number(key.toString());
        return userModel.post(newKey, JSON.stringify({
            "username" : username,
            "email" :  email
          }))
      })
      .then(function(){
        return tweetService.initTweets(newKey)
      })
      .then(function(){
        return followersModel.initFollowers(newKey)
      })
      .then(function () {
        return userModel.put(keys.user.root, newKey+1)
      })
      .catch(function(err){
        console.log('There\'s been an error, most likely the database wasn\'t initialized', err)
     })

  }

  delete(id){
    return userModel.delete(id);
  }
}
