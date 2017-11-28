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

    get(id){
        return db.get(keys.user.followers + id)
        .then(function(followers){
            return followers.toString()
        })
    }

}
