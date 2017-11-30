const db = require('../../config/db');
const chunkToJSON = require('./../core/utils/chunkToJSON')
const keys = require('./../core/keys')

module.exports = class FollowedModel{
  get(id){
    return db.get(keys.user.followedUsers + id)
      .then(function(followed){
        return followed.toString()
      })
  }
}
