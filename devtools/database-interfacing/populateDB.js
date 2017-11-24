const UserService = require('../../src/user/UserService');
const userService = new UserService();
const UserModel = require('../../src/user/UserModel');
const userModel = new UserModel();

userService
  .createRootKey('TotalUsers')
  .then(() => userService.post('user1','user1@gmail.com'))
