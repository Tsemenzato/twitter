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
    userService.get(req.username)
      .then(function(user){
        res.json(user)
      })
  }

}
