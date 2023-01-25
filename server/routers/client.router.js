const express = require('express');
const router = express.Router();
const clientController = require('../controllers/Client.controller');

router.post('/', clientController.insertClient);

router.post('/:clientId/sales', clientController.addSale);

router.post('/:clientId/expenses', clientController.addExpense);

router.get('/', clientController.getAllClients);

router.get('/:id', clientController.getClientDetails);

router.get('/:clientId/expenses', clientController.listAllExpenses);

router.get('/:clientId/sales', clientController.listSales);

router.get('/:clientId/sales/:saleId', clientController.getSale);

router.patch('/:id', clientController.updateClient);

router.put('/:clientId/sales/:saleId', clientController.updateSale);

router.delete('/:id', clientController.deleteClient);

module.exports = router;
