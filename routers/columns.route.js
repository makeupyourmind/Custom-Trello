const express = require('express')
const router = express.Router();
const ColumnsController = require('../controllers/columns.controller')

router.route('/').post(ColumnsController.create)

router.route('/').get(ColumnsController.getAll)

router.route('/:id').get(ColumnsController.getById)

router.route('/:id').patch(ColumnsController.updateSomething)

router.route('/:id').patch(ColumnsController.updateAll)

router.route('/:id').delete(ColumnsController.delete)

module.exports = router;