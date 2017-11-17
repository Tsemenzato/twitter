const UserModel = require('../src/user/UserModel.js');
const userModel = new UserModel();

userModel.post('user 1',JSON.stringify({
  email: 'tomas1@nan.com',
  tweets: [{
    date : 101117,
    text : 'lets do this'
  },
  {
    date : 091117,
    text : 'good morning!'
  }]
}));
