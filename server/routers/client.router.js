const express = require("express");
const router = express.Router();
const clientController = require("../controllers/client.controller");
const Client = require("../models/Client");

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

router.get("/detail/:id", (req, res) => {
    let id = req.params.id;
  
    Client.findById(id, function (err, post) {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true, post });
    });
  });

router.put("/update/:id", (req, res) => {
    Client.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      (err, data) => {
        if (err) returnres.status(400).json({ success: false, err });
        return res.status(200).json({ success: true });
      }
    );
  });
  
  router.delete("/delete/:id", (req, res) => {
    Client.findByIdAndRemove(req.params.id).exec((error, deletedItem) => {
      if (error) {
        res.send(error);
      }
      return res.json(deletedItem);
    });
  });
  

module.exports = router;
