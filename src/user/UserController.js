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
        res.send('User deleted')
      })
  }


  post(req, res){
    userService.post(req.body.username, req.body.email)
      .then(function(){
        res.send('User created succesfully!')
      })
      .catch(console.error)
  }

  put(req, res){
    userService.put(req.body.username, req.body.email, req.body.newUsername)
      .then(function(){
        res.send('User updated!')
      })
      .catch(console.error)
  }
}
