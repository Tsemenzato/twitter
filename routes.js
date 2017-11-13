const UserController = require('./src/user/UserController');
const userController = new UserController();
var express = require('express');

var router = express.Router();

router.get('/users', userController.getAll);

router.get('/users/:username', userController.get);

router.delete('/users/:username', userController.delete);

router.post('/users', userController.post);

router.put('/users', userController.put);

module.exports = router;
