const express = require('express')
const router = express.Router();
const CardsController = require('../controllers/cards.controller')
const auth = require('../middleware/token.middleware');
const cardsVerify = require('../middleware/cards.middleware')

router.route('/').post(CardsController.create)

router.route('/').get(CardsController.getAll)

router.route('/:id').get(CardsController.getById)

router.route('/:id').patch(auth,cardsVerify, CardsController.updateSomething)

router.route('/:id').put(auth,cardsVerify, CardsController.updateAll)

router.route('/:id').delete(auth,cardsVerify, CardsController.delete)

module.exports = router;