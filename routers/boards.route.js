const express = require('express')
const router = express.Router();
const BoardsController = require('../controllers/boards.controller')

router.route('/').post(BoardsController.create)

router.route('/').get(BoardsController.getAll)

router.route('/:id').get(BoardsController.getById)

router.route('/:id').patch(BoardsController.updateSomething)

router.route('/:id').put(BoardsController.updateAll)

router.route('/:id').delete(BoardsController.delete)

module.exports = router;