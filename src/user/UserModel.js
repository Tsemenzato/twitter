const db = require('../../config/db.js');

const chunkToJSON = require('../core/utils/chunkToJSON');


module.exports = class UserModule {
  
    get(key){
      return db.get(key)
    }
  
    getAll(){
      var usersList = [];
      return new Promise(function (resolve, reject){
          db.createReadStream({
            keys : true,
            values : true 
          })
            .on('data', function(user){
              if (user.key.toString()[0] !== 'T'){              
                usersList.push(chunkToJSON(user))
              }
            })
            .on('error', function(err){
              reject(err)
            })
            .on('end', function(){
              resolve(usersList)
            })
  
      })      
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
  