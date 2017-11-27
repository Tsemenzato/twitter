const FollowersModel = require('../../src/followers/FollowersController');
const followersModel = new FollowersModel();
const test = require('tape');

//cool stuff
test('success get', function (t) {
  const expectedId = '0';
  const followers = [{},{}];
  const dbMock = {
    get(id) {
      t.equal(id, expectedId, 'Get was called with the expected id');
      return Promise.resolve(followers);
    }
  };

  followersModel.db = dbMock;

  const id = 0;

  followersModel.get(id)
    .then(function(followers){
        t.equal(typeof followers, 'string', 'the type of the return was a string')
        t.equal(followers, '[{}{}]', 'And the array is properly passed')
    })
  t.end();
});
