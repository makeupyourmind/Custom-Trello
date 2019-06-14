const express = require('express')
const router = express.Router();
const NotificationsController = require('../controllers/notifications.controller')
const auth = require('../middleware/token.middleware');
// const boardsVerify = require('../middleware/boards.middleware')

router.route('/').post(NotificationsController.create)

router.route('/').get(NotificationsController.getAll)

router.route('/:id').get(NotificationsController.getById)

router.route('/:id').patch(auth, NotificationsController.updateSomething)

router.route('/:id').put(auth, NotificationsController.updateAll)

router.route('/:id').delete(auth, NotificationsController.delete)

module.exports = router;