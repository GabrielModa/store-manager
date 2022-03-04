const express = require('express');
const rescue = require('express-rescue');
const productsController = require('../controllers/productsController');

const router = express.Router();

router.get('/', rescue(productsController.getAll));
router.post('/', rescue(productsController.createProducts));
router.get('/:id', rescue(productsController.getById));
router.put('/:id', rescue(productsController.putById));

module.exports = router;
