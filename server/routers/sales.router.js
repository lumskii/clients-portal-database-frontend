const express = require('express');
const router = express.Router();
const salesController = require('../controllers/Sales.controller');

router.post("/", salesController.insertSales);

router.get('/', salesController.getAllSales)

router.get('/:id', salesController.getSalesByClientId);

module.exports = router;