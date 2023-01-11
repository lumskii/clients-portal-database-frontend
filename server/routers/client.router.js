const express = require("express");
const router = express.Router();
const clientController = require("../controllers/Client.controller");


router.post("/", clientController.insertClient);

router.post('/:clientId/sales', clientController.addSale);

router.get("/", clientController.getAllClients);

router.get("/:id", clientController.getClientDetails);

router.get('/:clientId/sales', clientController.listSales);

router.get('/cName', clientController.listCName);

router.get('/sales', clientController.listClientsWithSales);

router.patch("/:id", clientController.updateClient);

router.delete("/:id", clientController.deleteClient);

module.exports = router;
