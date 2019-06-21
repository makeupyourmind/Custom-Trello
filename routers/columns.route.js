const express = require('express')
const router = express.Router();
const ColumnsController = require('../controllers/columns.controller')
const auth = require('../middleware/token.middleware');
const columnsVerify = require('../middleware/columns.middleware')

router.route('/').post(ColumnsController.create)

router.route('/').get(ColumnsController.getAll)

router.route('/:id').get(ColumnsController.getById)

router.route('/:id').patch(auth,columnsVerify, ColumnsController.updateSomething)

router.route('/:id').put(auth,columnsVerify, ColumnsController.updateAll)

router.route('/:id').delete(auth,columnsVerify, ColumnsController.delete)

module.exports = router;