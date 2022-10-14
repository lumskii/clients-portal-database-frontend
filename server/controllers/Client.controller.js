const ClientSchema = require('../models/Clients')


// const insertClient = clientObj =>{
//     return new Promise((resolve, reject) => {
//         try {
//             ClientSchema(clientObj)
//                 .save()
//                 .then((data) => resolve(data))
//                 .catch((error) => reject(error));
//         } catch (error) {
//             reject(error);
//         }
//     });  
// };

// module.exports = {
//     insertClient,
// };

exports.insertClient = (req, res, next) => {
        const filmName = req.body.filmName;
        const producersEmail = req.body.producersEmail;
        const filmsCode = req.body.filmsCode;
        const distributionType = req.body.distributionType;
        const rightSale = req.body.rightSale;
        const cama = req.body.cama;
        const countryLaw = req.body.countryLaw;
        const stateLaw = req.body.stateLaw;
        const effectiveDate = req.body.effectiveDate;
        const dateSignature = req.body.dateSignature;
        const renewalDate = req.body.renewalDate;
        const renewalExpiration = req.body.renewalExpiration;
        const grossCor = req.body.grossCor;
        const grossCorRights = req.body.grossCorRights;
        const salesFee = req.body.salesFee;
        const producerPay = req.body.producerPay;
        const expenseCap = req.body.expenseCap;
        const deliveryFees = req.body.deliveryFees;
        const distributionFee = req.body.distributionFee;
        const incomeReserves = req.body.incomeReserves;
        const otherExps = req.body.otherExps;
        const accountingTerms = req.body.accountingTerms;
    

    const data = {
        filmName,
        producersEmail,
        filmsCode,
        distributionType,
        rightSale,
        cama,
        countryLaw,
        stateLaw,
        effectiveDate,
        dateSignature,
        renewalDate,
        renewalExpiration,
        grossCor,
        grossCorRights,
        salesFee,
        producerPay,
        expenseCap,
        deliveryFees,
        distributionFee,
        incomeReserves,
        otherExps,
        accountingTerms
    };

    const clientObj = ClientSchema(data);

    clientObj.save(function (err, dbClient) {
        if (err) {
            return res.json({ status: 500, message: "Unable to save amenity", err });
        }

        res.json({
            success: true,
            status: 200,
            data: {
                message: "Client Added Successfully.",
                newClient: dbClient,
            },
        });
    });
}