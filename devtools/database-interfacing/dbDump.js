const db = require('../../config/db.js');

module.exports = function (req, res){
        var usersList = [];
        db.createReadStream({
          keys : true,
          values : true 
        })
          .on('data', function(user){
           usersList.push(chunkToJSON(user));
          })
          .on('error', function(err){
            res.status(404);
            res.send;
          })
          .on('end', function(){
            res.json(usersList)
          })

    function chunkToJSON (data){
      return {
        key: data.key.toString(),
        data : data.value.toString()
      }
    }
  }