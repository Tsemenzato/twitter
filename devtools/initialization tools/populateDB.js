const UserService = require('../../src/user/UserService');
const userService = new UserService();
const UserModel = require('../../src/user/UserModel');
const userModel = new UserModel();
userModel.post('usrs', 0)
 .then(function (){
        userService.post('user1','user1@gmail.com');
        userService.post('user2','user2@gmail.com');
        userService.post('user3','user3@gmail.com');
    })
