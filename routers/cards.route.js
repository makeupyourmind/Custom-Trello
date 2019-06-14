const express = require('express')
const router = express.Router();
const CardsController = require('../controllers/cards.controller')
const auth = require('../middleware/token.middleware');

router.route('/').post(CardsController.create)

router.route('/').get(CardsController.getAll)

router.route('/:id').get(CardsController.getById)

router.route('/:id').patch(auth, CardsController.updateSomething)

router.route('/:id').put(auth, CardsController.updateAll)

router.route('/:id').delete(auth, CardsController.delete)

module.exports = router;