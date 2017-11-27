const FollowersModel = require('./FollowersModel')
const followersModel = new FollowersModel();

module.exports = class FollowerService {

    follow(follower, followed){
        return followersModel.follow(follower,followed)
    }
}