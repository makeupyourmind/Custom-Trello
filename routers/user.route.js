const express = require('express')
const router = express.Router();
const UserController = require('../controllers/user.controller')
const auth = require('../middleware/token.middleware');

router.route('/').post(UserController.signUp)

router.route('/signIn').post(UserController.signIn)

router.route('/test/:id').post(auth, UserController.test)

router.route('/').get(UserController.all)

router.route('/:id').get(UserController.getById)

router.route('/:id').patch(auth, UserController.updateByParam)

router.route('/:id').put(auth,UserController.updateAll)

router.route('/:id').delete(auth, UserController.delete)

module.exports = router;