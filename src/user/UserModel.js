const db = require('../../config/db.js')

module.exports = class UserModule {
  
    get(key){
      return db.get(key)
    }
  
    getAll(){
      return new Promise(function (resolve, reject){
          var usersList = [];
          db.createReadStream({
            keys : true,
            values : true 
          })
            .on('data', function(user){
              usersList.push(chunkToJSON(user));
            })
            .on('error', function(err){
              reject(err)
            })
            .on('end', function(){
              resolve(usersList)
            })
  
      })
      function chunkToJSON (data){
        return {
          key: data.key.toString(),
          data : data.value.toString()
        }
      }
    }
    put(key, value){
      return db.put(key,value)
    }
  
    post(key, value){
      return db.put(key,value)
    }
  
    delete(key){
      return db.del(key)
    }
  
  }
  