const UserService = require('../../src/user/UserService');
const userService = new UserService();

userService
  .createRootKey('users')
  .then(() => userService.post('user2','user1@gmail.com'))