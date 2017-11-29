const FollowerService = require('./FollowersService');

module.exports = class FollowerController {

    constructor() {
        this.followerService = new FollowerService();
    }

    follow(req, res){
        this.followerService.follow(req.params.user, req.body.followed)
        .then(function(){
            res.status(201);
            res.send()   
          })
          .catch(function(error){
            res.status(400);
            res.send();   
          })
    }

    unfollow(req, res){
        this.followerService.unfollow(req.params.user, req.body.unfollowed)
        .then(function(){
            res.status(200);
            res.send()   
          })
          .catch(function(error){
            res.status(400);
            res.send();
          })

    }
    
    get(req,res){
        followerService.get(req.params.user)
            .then(function(followersList){
                res.json(followersList)
            })
            .catch(function(error){
                res.status(400);
                res.send();   
              })
    }
    
    
    get(req,res){
      this.followerService
        .get(req.params.user)
        .then(function(followersList){
            res.json(followersList)
        })
        .catch(function(error){
            res.status(400);
            res.send();
        })
    }
}