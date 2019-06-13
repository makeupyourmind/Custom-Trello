const express = require('express')
const router = express.Router();
const UserController = require('../controllers/user.controller')
const auth = require('../middleware/token');

router.route('/').post(UserController.signUp)

router.route('/').get(UserController.all)

router.route('/:id').get(UserController.getById)

router.route('/:id').patch(UserController.updateByParam)

router.route('/:id').put(UserController.updateAll)

router.route('/:id').delete(UserController.delete)

module.exports = router;