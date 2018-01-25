const db = require('../../config/db.js');
const chunkToJSON = require('../../src/core/utils/chunkToJSON');

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
  }