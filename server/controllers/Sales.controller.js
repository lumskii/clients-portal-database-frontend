const Sales = require('../models/Sales');

exports.insertSales = (req, res) => {
    const client = req.body.clientId;
    const cName = req.body.cName;
    const territory = req.body.territory;
    const salesAmount = req.body.salesAmount;
    const receivedAmount = req.body.receivedAmount;
    const dealCD = req.body.dealCD;
    const dealED = req.body.dealED;

    const info = {
        client,
        cName,
        territory,
        salesAmount,
        receivedAmount,
        dealCD,
        dealED,
    };

    if (
        !cName ||
        !territory ||
        !salesAmount ||
        !receivedAmount
    ) {
        return res.json({
            status: 500,
            message: 'Some fields are empty.',
        });
    }

    const salesObj = Sales(info);

    salesObj.save(function (err, dbSales) {
        if (err) {
            return res.json({status: 500, message: 'Unable to save sales', err });
        }

        return res.json({
            success: true,
            status: 200,
            data: {
                message: 'Sales Added Successfully.',
                newSales: dbSales,
            },
        });
    });
};

exports.getSalesByClientId = (req, res) => {
    let id = req.params.id;

    Sales.find({ client: id })
      .populate("client")
      .exec((err, sales) => {
        if (err) return res.json({ success: false, error: err });

        console.log("get sales details per clients", sales);

        return res.json({ success: true, sales });
      });
    // Sales.findById(id, function (err, sales) {
    //     if (err) return res.json({ success: false, error: err });

    //     console.log('get sales details per clients', sales);

    //     return res.json({  success: true, sales });
    // })
};

exports.getAllSales = (req, res, next) => {
    Sales.find().populate('salesId').exec(function (err, sales) {
        if (err) 
            return res.json({ 
                success: false, 
                error: err 
            });

        if (!sales) {
            return res.json({
                success: false,
                error: 'No sales found',
            });
        } else {
            console.log('get all sales', sales);
            return res.json({
                success: true,
                data: sales,
            });
        }
    });
};


