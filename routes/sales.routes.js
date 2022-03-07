const express = require('express');
const rescue = require('express-rescue');
const salesController = require('../controllers/salesController');

const router = express.Router();

router.get('/', rescue(salesController.getAll));
router.post('/', rescue(salesController.salesProducts));
router.get('/:id', rescue(salesController.getById));
router.put('/:id', rescue(salesController.put));

module.exports = router;