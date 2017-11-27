const FollowerService = require('./FollowersService');
const followerService = new FollowerService();

module.exports = class FollowerController {

    follow(req, res){
        followerService.follow(req.params.user, req.body.followed)
        .then(function(){
            res.status(201);
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
}