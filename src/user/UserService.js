const UserModel = require('./UserModel.js');
const userModel = new UserModel();

module.exports = class UserService {

  get(id){
    return userModel.get(id)
  }

  getAll(){
    return userModel.getAll()
  }

  put(id, email, newUsername){
   return userModel.get(id)
      .then(function(user){
        let value = JSON.parse(user)
        if (email) {
          value["email"] = email;
        }
        if (newUsername){
<<<<<<< HEAD
          userModel.delete(username)
            .then(function(){
              return userModel.post(newUsername, JSON.stringify(value))
            })
        }
        else {
          userModel.put(username, JSON.stringify(value))
        }
=======
          value["username"] = newUsername;
        }        
        userModel.put(id, JSON.stringify(value))
>>>>>>> 38d911b... Changed key schema
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

  delete(id){
    return userModel.delete(id);
  }
}
