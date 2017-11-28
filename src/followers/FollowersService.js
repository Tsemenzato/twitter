const FollowersModel = require('./FollowersModel')

module.exports = class FollowerService {
    constructor() {
        this.followersModel = new FollowersModel();
    }

    follow(follower, followed){
        return this.followersModel.follow(follower,followed)
    }

    unfollow(unfollower, unfollowed){
        return this.followersModel.unfollow(unfollower,unfollowed)
    }

    get(user){
        return this.followersModel.get(user)
    }

}