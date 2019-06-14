const express = require('express')
const router = express.Router();
const BoardsController = require('../controllers/boards.controller')
const auth = require('../middleware/token.middleware');
const boards = require('../middleware/boards.middleware')

router.route('/').post(BoardsController.create)

router.route('/').get(BoardsController.getAll)

router.route('/:id').get(BoardsController.getById)

router.route('/:id').patch(auth, boards, BoardsController.updateSomething)

router.route('/:id').put(auth,boards, BoardsController.updateAll)

router.route('/:id').delete(auth, boards, BoardsController.delete)

module.exports = router;