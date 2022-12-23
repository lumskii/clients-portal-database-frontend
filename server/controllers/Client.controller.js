const Client = require("../models/Client");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, '../images');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({ storage: storage }).single('avatar');

exports.insertClient = (req, res, next) => {
  upload(req, res, (err) => {
    if (err) {
      return res.json({ status: 500, message: "Unable to save image", err });
    } else {
      return res.json({
        status: 200,
        message: "image saved successfully",
      })
    }
  });
  const filmName = req.body.filmName;
  const producersEmail = req.body.producersEmail;
  const filmsCode = req.body.filmsCode;
  const distributionType = req.body.distributionType;
  const runtime = req.body.runtime;
  const genre = req.body.genre;
  const rightSale = req.body.rightSale;
  const rightSaleOpt = req.body.rightSaleOpt;
  const comment = req.body.comment;
  const cama = req.body.cama;
  const countryLaw = req.body.countryLaw;
  const stateLaw = req.body.stateLaw;
  const effectiveDate = req.body.effectiveDate;
  const dateSignature = req.body.dateSignature;
  const renewalDate = req.body.renewalDate;
  const renewalExpiration = req.body.renewalExpiration;
  const gross = req.body.gross;
  const fees = req.body.fees;
  const distributionFee = req.body.distributionFee;
  const incomeReserves = req.body.incomeReserves;
  const ingestionFee = req.body.ingestionFee;
  const marketingCap = req.body.marketingCap;
  const filmMarketCost = req.body.filmMarketCost;
  const accountingTerms = req.body.accountingTerms;
  const reportingSchedule = req.body.reportingSchedule;
  const reportingStartDate = req.body.reportingStartDate;
  const avatar = req.file.filename;

  const data = {
    filmName,
    producersEmail,
    filmsCode,
    distributionType,
    runtime,
    genre,
    rightSale,
    rightSaleOpt,
    comment,
    cama,
    countryLaw,
    stateLaw,
    effectiveDate,
    dateSignature,
    renewalDate,
    renewalExpiration,
    gross,
    fees,
    distributionFee,
    incomeReserves,
    ingestionFee,
    marketingCap,
    filmMarketCost,
    accountingTerms,
    reportingSchedule,
    reportingStartDate,
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
    if (err instanceof multer.MulterError) {
      return res.status(500).json({ status: false, message: err.message });
    } else if (err) {
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


