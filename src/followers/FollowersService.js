const FollowersModel = require('./FollowersModel')
const followersModel = new FollowersModel();

module.exports = class FollowerService {

    follow(follower, followed){
        return followersModel.follow(follower,followed)
    }

    unfollow(unfollower, unfollowed){
        return followersModel.unfollow(unfollower,unfollowed)
    }

    get(user){
        return followersModel.get(user)
    }

}