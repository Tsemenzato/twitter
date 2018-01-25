const FollowedModel = require('./FollowedModel')

module.exports = class FollowerService {
    constructor() {
        this.followedModel = new FollowedModel();
    }
    
    get(user){
        return this.followedModel.get(user)
    }
}