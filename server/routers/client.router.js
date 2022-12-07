const express = require("express");
const router = express.Router();
const clientController = require("../controllers/Client.controller");


router.post("/", clientController.insertClient);

router.get("/", clientController.getAllClients);

router.get("/:id", clientController.getClientDetails);

router.patch("/:id", clientController.updateClient);

router.delete("/:id", clientController.deleteClient);

module.exports = router;
