const express = require('express')
const router = express.Router();
const CommentsController = require('../controllers/comments.controller')
const auth = require('../middleware/token.middleware');

router.route('/').post(CommentsController.create)

router.route('/').get(CommentsController.getAll)

router.route('/:id').get(CommentsController.getById)

router.route('/:id').patch(auth, CommentsController.updateSomething)

router.route('/:id').patch(auth, CommentsController.updateAll)

router.route('/:id').delete(auth, CommentsController.delete)

module.exports = router;