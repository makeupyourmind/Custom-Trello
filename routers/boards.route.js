const express = require('express')
const router = express.Router();
const BoardsController = require('../controllers/boards.controller')
const auth = require('../middleware/token.middleware');
const boardsVerify = require('../middleware/boards.middleware')

router.route('/').post(BoardsController.create)

router.route('/').get(BoardsController.getAll)

router.route('/:id').get(BoardsController.getById)

router.route('/:id').patch(auth, boardsVerify, BoardsController.updateSomething)

router.route('/:id').put(auth,boardsVerify, BoardsController.updateAll)

router.route('/:id').delete(auth, boardsVerify, BoardsController.delete)

module.exports = router;