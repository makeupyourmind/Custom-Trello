const express = require('express')
const router = express.Router();
const BoardsController = require('../controllers/boards.controller')
const auth = require('../middleware/token.middleware');
const boardsVerify = require('../middleware/boards.middleware')

router.route('/').post(BoardsController.create)

router.route('/').get(BoardsController.getAll)

router.route('/:id').get(BoardsController.getById)

router.route('/:id').patch(auth, BoardsController.updateSomething)

router.route('/:id').put(auth, BoardsController.updateAll)

router.route('/:id').delete(auth, BoardsController.delete)

module.exports = router;