const UserService = require('../../src/user/UserService');
const userService = new UserService();
const UserModel = require('../../src/user/UserModel');
const userModel = new UserModel();

userService
  .createRootKey('users')
  .then(() => userService.post('user2','user1@gmail.com'))