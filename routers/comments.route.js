const express = require('express')
const router = express.Router();
const CommentsController = require('../controllers/comments.controller')
const auth = require('../middleware/token.middleware');

router.route('/').post(CommentsController.create)

router.route('/').get(CommentsController.getAll)

router.route('/:id').get(CommentsController.getById)

router.route('/:id').patch(CommentsController.updateSomething)

router.route('/:id').patch(CommentsController.updateAll)

router.route('/:id').delete(CommentsController.delete)

module.exports = router;