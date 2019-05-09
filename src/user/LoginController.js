const UserService = require('./UserService');
const userService = new UserService();

module.exports = class LoginController {
   login (req, res) {
      function usernameExists(currentValue, index, arr){
         currentValue.data = JSON.parse(currentValue.data);
         if (currentValue.data.username == req.params.username) {
            return true
         }
      }
      userService.getAll()
      .then(function (usersList){
         let user = usersList.find(usernameExists)
         if (user ==='undefined'){
            res.sendStatus(404)
         } else {
            res.status(200)
            res.send(user.key)
         }
      })
      .catch(function(err){
         res.send(err);
      })
   }
}