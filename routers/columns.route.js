const express = require('express')
const router = express.Router();
const ColumnsController = require('../controllers/columns.controller')
const auth = require('../middleware/token.middleware');

router.route('/').post(ColumnsController.create)

router.route('/').get(ColumnsController.getAll)

router.route('/:id').get(ColumnsController.getById)

router.route('/:id').patch(auth, ColumnsController.updateSomething)

router.route('/:id').patch(auth, ColumnsController.updateAll)

router.route('/:id').delete(auth, ColumnsController.delete)

module.exports = router;