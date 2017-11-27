const keys = require('../../src/core/keys');
const UserService = require('../../src/user/UserService');
const userService = new UserService();
const UserModel = require('../../src/user/UserModel');
const userModel = new UserModel();

userService
  .createRootKey(keys.user.root)
  .then(() => userService.post('user1','user1@gmail.com'))
