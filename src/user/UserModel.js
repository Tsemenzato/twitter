const level = require('level');
var db = level(`${__dirname}/../../db/level`);
module.exports = class UserModule {

  get(key){
    return db.get(key)
  }

  getAll(){
    return new Promise(function (resolve, reject){
        var usersList = [];
        db.createReadStream()
          .on('data', function(user){
            console.log(user);
            usersList.push(user);
          })
          .on('error', function(err){
            reject(err)
          })
          .on('end', function(){
            console.log('ended')
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
