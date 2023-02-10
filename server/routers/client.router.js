const express = require('express');
const router = express.Router();
const clientController = require('../controllers/Client.controller');

router.get('/sales', clientController.getSales);

router.get('/revenue', clientController.listRevenueByTerritory);

router.get('/revenuebyplatform', clientController.listRevenueByPlatform);

router.get('/revenuebyyear', clientController.listRevenueByYear);

router.post('/', clientController.insertClient);

router.post('/:clientId/sales', clientController.addSale);

router.post('/:clientId/expenses', clientController.addExpense);

router.post('/:clientId/dist-rev', clientController.addDistributionRev);

router.get('/', clientController.getAllClients);

router.get('/:id', clientController.getClientDetails);

router.get('/:clientId/expenses', clientController.listAllExpenses);

router.get('/:clientId/dist-rev', clientController.listAllDistributionRev);

router.get('/:clientId/sales', clientController.listSales);

router.get('/:clientId/sales/:saleId', clientController.getSale);

router.get('/:clientId/dist-rev/:distRevId', clientController.getDistRev);

router.patch('/:id', clientController.updateClient);

router.put('/:clientId/sales/:saleId', clientController.updateSale);

router.put('/:clientId/dist-rev/:distRevId', clientController.updateDistRev);

router.delete('/:id', clientController.deleteClient);

router.delete('/:clientId/sales/:saleId', clientController.deleteSale);

module.exports = router;
