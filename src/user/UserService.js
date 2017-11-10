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
    userModel.get(username)
      .then(function(user){
        let value = JSON.parse(user.value)
        if (email) {
          value[email] = email;
        }
        if (newUsername){
          userModel.del(username)
            .then(function(){
              return userModel.post(newUsername, JSON.stringify(value))
            })
        }
      })
      .catch(console.error)
  }

  post(username, email){
    return userModel.post(username, JSON.parse({
      email : email,
      tweets : []
    }))
  }

  delete(username){
    return userModel.delete(username);
  }
}
