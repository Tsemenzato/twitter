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
    var newKey;
    userModel.get('usrs')
      .then(function(key){
        newKey = key.value;
        userModel.post(key.value, {
          "username" : username,
          "email" :  email
        })
        .then(function () {
          userModel.put('usrs', newKey + 1)
        })
     })
    
  }      
    
  delete(username){
    return userModel.delete(username);
  }
}
/*return generateNewKey()
      .then(addUser)     
      .then(updateUserCounter) 
      .then(initializeUserTweets)
      .catch(console.error)
            
    function addUser (newKey){
      userModel.post(newKey ,JSON.stringify({
        "username" : username,
        "email" : email
      }))
    }

    function generateNewKey(){
      return new Promise(function(resolve, reject){
        userModel.get('usrs')
        .then(resolve)
        .catch(reject)  
      })
    }   

    function updateUserCounter(userCounter){
      newKey = userCounter;
      return  userModel.put('usrs', userCounter+1);
    
      }
    

    function initializeUserTweets(){
      return userModel.post(`T${newKey}`,[])
    }*/