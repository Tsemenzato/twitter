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
          userModel.delete(username)
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

  createRootKey(rootKey) {
    return userModel.post(rootKey, 0)
  }

  post(username, email){
    let newKey;
    return userModel.get('users')
      .then(function(key){
        newKey = Number(key.toString());
        return userModel.post(newKey, JSON.stringify({
          "username" : username,
          "email" :  email
        }))
        .then(function () {
          return userModel.put('users', newKey+1)
        })
     })

  }

  delete(username){
    return userModel.delete(username);
  }
}
