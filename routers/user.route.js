const express = require('express')
const router = express.Router();
const { check } = require('express-validator/check');
const UserController = require('../controllers/user.controller')
const auth = require('../middleware/token.middleware');
const confirmUser = require('../middleware/confirm-user.middleware')
const checkError = require('../middleware/verifyErrors.middleware')

router.route('/').post(
[check('nickname').isLength({ min: 5 }).withMessage('Nickname must be at least 5 chars long'),
check('password').isLength({ min: 5 }).withMessage('Password must be at least 5 chars long'),
check('email').isEmail().withMessage('Email must be email')
], checkError, UserController.signUp)

router.route('/signIn').post(
[check('password').isLength({ min: 5 }).withMessage('Password must be at least 5 chars long'),
check('email').isEmail().withMessage('Email must be email')
], checkError, UserController.signIn)

// router.route('/test/:id').post(auth,confirmUser, UserController.test)

router.route('/').get(UserController.all)

router.route('/:id').get(UserController.getById)

router.route('/:id').patch(auth, confirmUser, UserController.updateByParam)

router.route('/:id').put(auth,confirmUser, UserController.updateAll)

router.route('/:id').delete(auth,confirmUser, UserController.delete)

module.exports = router;