const test = require('tape');
const UserController = require('../../src/followers/FollowersController');
const userController = new UserController();


test('success get', function (t) {
  const expectedUser = '0';
  const followersList = [{},{}];
  const followerServiceMock = {
    get(user) {
      t.equal(user, expectedUser, 'Get was called with the expected user');
      return Promise.resolve(followersList);
    }
  };

  userController.followerService = followerServiceMock;

  const req = {
    params: {
      user: expectedUser
    }
  }
  const res = {
    json(value) {
      t.equal(value, followersList, 'json was called with the expected user list');
    }
  }

  userController.get(req, res);

  t.end();
});


test('failed get', function (t) {
  t.plan(3);
  const expectedUser = '0';
  const followerServiceMock = {
    get(user) {
      t.equal(user, expectedUser, 'Get was called with the expected user');
      return Promise.reject('database broken');
    }
  };

  userController.followerService = followerServiceMock;

  const req = {
    params: {
      user: expectedUser
    }
  }
  const res = {
    status(value){
      t.equal(value, 400, 'Status was called with 400')
    },
    send(){
      t.equal(1,1, 'Send was called')
    }
  }

  userController.get(req, res);
});
