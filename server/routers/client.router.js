const express = require("express");
const router = express.Router();
const clientController = require("../controllers/client.controller");

// - create url endpoints
// router.post("/", (req, res) => {
//   try {
//     // - receive new client data
//     const { filmName, producersEmail, filmsCode, distributionType } = req.body;

//     const clientObj = {
//       clientId: "633a869480c54913060af55e",
//       filmName,
//       producersEmail,
//       filmsCode,
//       distributionType,
//     };

//     const result = insertClient(clientObj);
//     if (result._id) {
//       return res.json({
//         status: "success",
//         message: "New ticket has been created!",
//       });
//     }

//     // - insert in mongodb
//     res.json({ status: "error", message: error.message });
//   } catch (error) {}
// });

router.post("/", clientController.insertClient);

router.get("/", clientController.getAllClients);

router.get("/:id", clientController.getClientDetails);

router.patch("/:id", clientController.updateClient);

router.delete("/:id", clientController.deleteClient);

module.exports = router;
