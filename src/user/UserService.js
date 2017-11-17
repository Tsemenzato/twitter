const UserModel = require('./UserModel.js');
const userModel = new UserModel();

module.exports = class UserService {

  get(username){
    return userModel.get(username)
  }

  getAll(){
    return userModel.getAll()
  }

  put(username, email, newUsername){
   return userModel.get(username)
      .then(function(user){
        let value = JSON.parse(user)
        if (email) {
          value["email"] = email;
        }
        if (newUsername){
          userModel.del(username)
            .then(function(){
              return userModel.post(newUsername, JSON.stringify(value))
            })
        }
        else {
          userModel.put(username, JSON.stringify(value))
        }
      })
      .catch(console.error)
  }

  post(username, email){
    return userModel.post(username, JSON.stringify({
      email : email,
      tweets : []
    }))
  }

  delete(username){
    return userModel.delete(username);
  }
}
