const Client = require("../models/Client");


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
  const expenseCap = req.body.expenseCap;
  const customExp = req.body.customExp;
  const expense = req.body.expense;
  const grossCor = req.body.grossCor;
  const grossCorRights = req.body.grossCorRights;
  const producerPay = req.body.producerPay;
  const deliveryFees = req.body.deliveryFees;
  const distributionFee = req.body.distributionFee;
  const incomeReserves = req.body.incomeReserves;
  const accountingTerms = req.body.accountingTerms;
  const avatar = req.body.avatar;

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
    expenseCap,
    customExp,
    expense,
    grossCor,
    grossCorRights,
    producerPay,
    deliveryFees,
    distributionFee,
    incomeReserves,
    accountingTerms,
    avatar,
  };

  if (
    !filmName ||
    !filmsCode
  ) {
    return res.json({
      status: 500,
      message: "Some fields are empty.",
    });
  }

  const clientObj = Client(data);

  clientObj.save(function (err, dbClient) {
    if (err) {
      return res.json({ status: 500, message: "Unable to save amenity", err });
    }

    return res.json({
      success: true,
      status: 200,
      data: {
        message: "Client Added Successfully.",
        newClient: dbClient,
      },
    });
  });
};



exports.getAllClients = (req, res, next) => {
  Client.find({}, function (err, clients) {
    if (err)
      return res.json({
        status: 500,
        message: "Error occured in retrieving clients",
      });

    if (!clients) {
      return res.json({
        success: true,
        status: 200,
        data: {
          message: "No title found",
        },
      });
    } else {
      return res.json({
        success: true,
        status: 200,
        data: {
          message: "clients found",
          clients,
        },
      });
    }
  });
};

exports.getClientDetails = (req, res) => {
  let id = req.params.id;

  Client.findById(id, function (err, client) {
    if (err) return res.json({ success: false, error: err });

    console.log("get client details", client);

    return res.json({ success: true, client });
  });
};

exports.updateClient = (req, res) => {
  Client.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
      $set: req.file,
    },
    (err, data) => {
      if (err) return res.status(400).json({ success: false, err });
      return res.status(200).json({ success: true });
    }
  );
};

exports.deleteClient = (req, res) => {
  Client.findByIdAndRemove(req.params.id).exec((error, deletedItem) => {
    if (error) {
      res.send(error);
    }
    return res.json({
      success: true,
      deletedItem,
      message: "Client successfully deleted",
    });
  });
};


