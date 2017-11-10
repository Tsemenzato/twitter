const UserController = require('./src/user/UserController');
const userController = new UserController();
var express = require('express');

var router = express.Router();

router.get('/users', userController.getAll);

router.get('/users:id', userController.get);


module.exports = router;
