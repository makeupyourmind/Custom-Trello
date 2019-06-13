const express = require('express')
const router = express.Router();
const CardsController = require('../controllers/cards.controller')

router.route('/').post(CardsController.create)

router.route('/').get(CardsController.getAll)

router.route('/:id').get(CardsController.getById)

router.route('/:id').patch(CardsController.updateSomething)

router.route('/:id').put(CardsController.updateAll)

router.route('/:id').delete(CardsController.delete)

module.exports = router;