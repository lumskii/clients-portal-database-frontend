const express = require("express")
const router = express.Router()
const { insertClient } = require('../../controllers/Client.controller')

router.all('/', (req, res, next)=>{
    //res.json({ message: "return from clients router" });

    next()
});

// - create url endpoints

router.post('/',(req, res) => {
    try {
         // - receive new client data
    const { filmName, producersEmail, filmsCode, distributionType } = req.body;

    const clientObj = {
        clientId: "633a869480c54913060af55e",
        filmName,
        producersEmail,
        filmsCode,
        distributionType,
    }

    const result = insertClient(clientObj);
    if(result._id){
        return res.json({status:'success', message: 'New ticket has been created!'});
    }

    // - insert in mongodb
    res.json({ status:'error', message: error.message });
    } catch (error) {

    }
   
});

module.exports = router;