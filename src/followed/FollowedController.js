const FollowedService = require('./FollowedService');

module.exports = class FollowedController {
  
  constructor() {
    this.followedService = new FollowedService();
  }

  get(req,res){
    this.followedService.getFollowed(req.params.user)
      .then(function(followedList){
        res.json(followedList)
      })
      .catch(function(error){
        res.status(400);
        res.send();
      })
  }  
}


