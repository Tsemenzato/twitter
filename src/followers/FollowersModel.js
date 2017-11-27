const db = require('../../config/db');
const UserService = require('../user/UserService');
const chunkToJSON = require('./../core/utils/chunkToJSON')
const keys = require('./../core/keys')

module.exports = class FollowersModel{
   
    
    follow(follower, followed){//First we make user A follow user B
       return db.get(`${keys.user.followedUsers}${follower}`)
        .then(function(usersFollowedBuffer){
           let usersFollowed =  JSON.parse(usersFollowedBuffer.toString());
           usersFollowed.push(followed);
           return db.put(keys.user.followedUsers + follower, JSON.stringify(usersFollowed))
        })
        .then(function(){// And then we add a new follower to user B
           return db.get(`${keys.user.followers}${followed}`)
        })
        .then(function(usersFollowingBuffer){
            let usersFollowing = JSON.parse(usersFollowingBuffer.toString());
            usersFollowing.push(follower);
            return db.put(`${keys.user.followers}${followed}`, JSON.stringify(usersFollowing))
        })
        .catch(console.error)
    }

    
    initFollowers(user){ 
    return  db.put(keys.user.followedUsers + user, JSON.stringify([]))  
        .then(function(){
           return db.put(keys.user.followers + user, JSON.stringify([]))
        })
    }

    unfollow(unfollower, unfollowed){
        return db.get(`${keys.user.followedUsers}${unfollower}`)
         .then(function(usersFollowedBuffer){
            let usersFollowed =  JSON.parse(usersFollowedBuffer.toString());
            let index = usersFollowed.indexOf(unfollowed);
            usersFollowed.splice(index, 1);
            return db.put(keys.user.followedUsers + unfollower, JSON.stringify(usersFollowed))
         })
         .then(function(){
            return db.get(keys.user.followers + unfollowed)
         })
         .then(function(usersFollowingBuffer){
             let usersFollowing = JSON.parse(usersFollowingBuffer.toString());
             let index = usersFollowing.indexOf(unfollower);
             usersFollowing.splice(index, 1);
             return db.put(keys.user.followers + unfollowed, JSON.stringify(usersFollowing))
         })
         .catch(console.error)
     }
}