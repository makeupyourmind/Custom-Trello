const express = require('express')
const router = express.Router();
const UserController = require('../controllers/user.controller')
const auth = require('../middleware/token.middleware');
const confirmUser = require('../middleware/confirm-user.middleware')

router.route('/').post(UserController.signUp)

router.route('/signIn').post(UserController.signIn)

router.route('/test/:id').post(auth,confirmUser, UserController.test)

router.route('/').get(UserController.all)

router.route('/:id').get(UserController.getById)

router.route('/:id').patch(auth, confirmUser, UserController.updateByParam)

router.route('/:id').put(auth,confirmUser, UserController.updateAll)

router.route('/:id').delete(auth,confirmUser, UserController.delete)

module.exports = router;