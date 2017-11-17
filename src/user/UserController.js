const UserService = require('./UserService');
const userService = new UserService();

module.exports = class UserController {

  getAll(req, res){
    userService.getAll()
      .then(function(userList){
        res.json(userList)
      })
      .catch(console.error)
  }

  get(req, res){
  userService.get(req.params.username)
      .then(function(user){
          res.json(JSON.parse(user))
      })
  }


  delete(req, res){
    userService.delete(req.params.username)
      .then(function(){
        res.status(204);
        res.send('User deleted')
      })
  }


  post(req, res){
    userService.post(req.body.username, req.body.email)
      .then(function(){
        res.status(201);
        res.location(`/users/${req.body.username}`);
        res.send()   
      })
      .catch(function(error){
        res.status(400);
        res.send();   
      })
  }

  put(req, res){
    userService.put(req.body.username, req.body.email, req.body.newUsername)
      .then(function(updated){
        res.status(201);
        res.json(updated)
      })
      .catch(function(error){
        res.status(400);
        res.send();   
      })
  }
}
