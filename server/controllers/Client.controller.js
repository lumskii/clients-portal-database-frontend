const multer = require('multer');
const flatten = require('lodash/flatten');
const subYears = require('date-fns/subYears');
const startOfYear = require('date-fns/startOfYear');
const endOfYear = require('date-fns/endOfYear');
const Client = require('../models/Client');

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
  // upload(req, res, (err) => {
  //   if (err) {
  //     return res.json({ status: 500, message: "Unable to save image", err });
  //   } else {
  //     return res.json({
  //       status: 200,
  //       message: "image saved successfully",
  //     })
  //   }
  // });
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
  const avatar = req.body.avatar;

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

  if (!filmName || !filmsCode) {
    return res.json({
      status: 500,
      message: 'Some fields are empty.',
    });
  }

  const clientObj = Client(data);

  clientObj.save(function (err, dbClient) {
    // if (err instanceof multer.MulterError) {
    //   return res.status(500).json({ status: false, message: err.message });
    // } else
    if (err) {
      return res.json({ status: 500, message: 'Unable to save amenity', err });
    }
    return res.json({
      success: true,
      status: 200,
      data: {
        message: 'Client Added Successfully.',
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
        message: 'Error occured in retrieving clients',
      });

    if (!clients) {
      return res.json({
        success: true,
        status: 200,
        data: {
          message: 'No title found',
        },
      });
    } else {
      return res.json({
        success: true,
        status: 200,
        data: {
          message: 'clients found',
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

    console.log('get client details', client);

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
      message: 'Client successfully deleted',
    });
  });
};

exports.addSale = (req, res) => {
  const clientId = req.params.clientId;
  const cName = req.body.cName;
  const territory = req.body.territory;
  const salesAmount = req.body.salesAmount;
  const receivedAmount = req.body.receivedAmount;
  const dealCD = req.body.dealCD;
  const dealED = req.body.dealED;

  const newSale = {
    cName,
    territory,
    salesAmount,
    receivedAmount,
    dealCD,
    dealED,
  };

  if (!cName || !territory || !salesAmount || !receivedAmount) {
    return res.json({
      status: 500,
      message: 'Some fields are empty.',
    });
  }

  Client.findById(clientId, function (err, client) {
    if (err) return res.json({ success: false, error: err });

    console.log('get client details', client);

    client.sales.push(newSale);
    client.save(function (err, dbSales) {
      if (err) return res.json({ success: false, error: err });

      return res.json({ success: true, status: 200, sales: dbSales });
    });
  });
};

exports.listSales = async (req, res) => {
  const clientId = req.params.clientId;
  try {
    const client = await Client.findById(clientId);
    if (!client) {
      return res.status(404).json({
        message: 'Client not found',
      });
    }
    return res.status(200).json({
      sales: client.sales,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: 'Error retrieving sales',
      error: err,
    });
  }
};

exports.updateSale = (req, res) => {
  const clientId = req.params.clientId;
  const saleId = req.params.saleId;

  Client.findById(clientId, function (err, client) {
    if (err || !client)
      return res.json({ success: false, error: 'Invalid Client ID' });
    if (!client.sales.id(saleId))
      return res.json({ success: false, error: 'Invalid Sale ID' });
    const sale = client.sales.id(saleId);
    sale.set(req.body);
    client.save(function (err, dbSale) {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true, sale: dbSale });
    });
  });
};

exports.getSale = (req, res) => {
  const clientId = req.params.clientId;
  const saleId = req.params.saleId;

  Client.findById(clientId)
    .then((client) => {
      if (!client) {
        return res.status(404).json({ message: 'Client not found' });
      }
      const sale = client.sales.id(saleId);
      if (!sale) {
        return res.status(404).json({ message: 'Sale not found' });
      }
      res.json(sale);
    })
    .catch((err) =>
      res.status(500).json({ message: 'Error retrieving sale', error: err })
    );
};

exports.addExpense = (req, res) => {
  const clientId = req.params.clientId;
  const dateExp = req.body.dateExp;
  const cType = req.body.cType;
  const describe = req.body.describe;
  const amount = req.body.amount;

  const newExpenses = {
    dateExp,
    cType,
    describe,
    amount,
  };

  if (!dateExp || !cType || !describe || !amount) {
    return res.json({
      status: 500,
      message: 'Some fields are empty.',
    });
  }

  Client.findById(clientId, function (err, client) {
    if (err) return res.json({ success: false, error: err });

    console.log('get client details', client);

    client.expenses.push(newExpenses);
    client.save(function (err, dbExpenses) {
      if (err) return res.json({ success: false, error: err });

      return res.json({ success: true, status: 200, expenses: dbExpenses });
    });
  });
};

exports.listAllExpenses = async (req, res) => {
  const clientId = req.params.clientId;
  try {
    const client = await Client.findById(clientId);
    if (!client) {
      return res.status(404).json({
        message: 'Client not found',
      });
    }
    return res.status(200).json({
      expenses: client.expenses,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: 'Error retrieving expenses',
      error: err,
    });
  }
};

// ==== get sales ====

const getSalesByClient = async (clientId) => {
  const client = await Client.findById(clientId).select('sales');
  return client?.sales || [];
};

const getSalesByTerritory = async (territory) => {
  const clients = await Client.find({
    sales: {
      $elemMatch: {
        territory,
      },
    },
  }).select('sales');
  return flatten(
    clients.map((c) => c.sales).filter((s) => s.territory === territory)
  );
};

const getSalesByAge = async (age) => {
  const date = subYears(new Date(), age);
  const startDate = startOfYear(date);
  const endDate = endOfYear(date);
  const clients = await Client.find({
    effectiveDate: {
      $gte: startDate,
      $lte: endDate,
    },
  }).select('sales');
  return flatten(clients.map((c) => c.sales));
};

const getSalesByExpiration = async (expiration) => {
  const clients = await Client.find({
    renewalExpiration: {
      $gte: new Date(expiration[0]),
      $lte: new Date(expiration[1]),
    },
  }).select('sales');
  return flatten(clients.map((c) => c.sales));
};

const getSalesByGenre = async (genre) => {
  const clients = await Client.find({ genre }).select('sales');
  return flatten(clients.map((c) => c.sales));
};

exports.getSales = async (req, res) => {
  try {
    let sales = [];
    if (req.query.client) {
      sales = await getSalesByClient(req.query.client);
    } else if (req.query.territory) {
      sales = await getSalesByTerritory(req.query.territory);
    } else if (req.query.age) {
      sales = await getSalesByAge(req.query.age);
    } else if (req.query.expiration) {
      sales = await getSalesByExpiration(req.query.expiration);
    } else if (req.query.genre) {
      sales = await getSalesByGenre(req.query.genre);
    }
    return res.status(200).json({ sales });
  } catch (err) {
    return res.status(500).json({
      message: 'Error retrieving sales',
      error: err,
    });
  }
};

exports.addDistributionRev = (req, res) => {
  const clientId = req.params.clientId;
  const cName = req.body.cName;
  const cType = req.body.cType;
  const rType = req.body.rType;
  const territory = req.body.territory;
  const revenueAmount = req.body.revenueAmount;
  const receivedAmount = req.body.receivedAmount;

  const newDistributionRev = {
    cName,
    cType,
    rType,
    territory,
    revenueAmount,
    receivedAmount,
  };

  if (!cName || !cType || !rType || !territory || !revenueAmount || !receivedAmount) {
    return res.json({
      status: 500,
      message: "Some fields are empty.",
    });
  }

  Client.findById(clientId, function (err, client) {
    if (err) return res.json({ success: false, error: err });

    console.log("get client details", client);

    client.distributionRev.push(newDistributionRev);
    client.save(function (err, dbDistributionRev) {
      if (err) return res.json({ success: false, error: err });

      return res.json({
        success: true,
        status: 200,
        distributionRev: dbDistributionRev,
      });
    });
  });
  };

exports.listAllDistributionRev = async (req, res) => {
  const clientId = req.params.clientId;
  try {
    const client = await Client.findById(clientId);
    if (!client) {
      return res.status(404).json({
        message: "Client not found",
      });
    }
    return res.status(200).json({
      distributionRev: client.distributionRev,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Error retrieving distribution revenue",
      error: err,
    });
  }
};

exports.updateDistRev = (req, res) => {
  const clientId = req.params.clientId;
  const distRevId = req.params.distRevId;

  Client.findById(clientId, function (err, client) {
    if (err || !client)
      return res.json({ success: false, error: "Invalid Client ID" });
    if (!client.distributionRev.id(distRevId))
      return res.json({ success: false, error: "Invalid Distribution Revenue ID" });
    const distRev = client.distributionRev.id(distRevId);
    distRev.set(req.body);
    client.save(function (err, dbDistRev) {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true, distRev: dbDistRev });
    });
  });
};

exports.getDistRev = (req, res) => {
  const clientId = req.params.clientId;
  const distRevId = req.params.distRevId;
  
  Client.findById(clientId)
      .then(client => {
          if (!client) {
              return res.status(404).json({ message: "Client not found" });
          }
          const distRev = client.distributionRev.id(distRevId);
          if (!distRev) {
              return res.status(404).json({ message: "Distribution Revenue not found" });
          }
          res.json(distRev);
      })
      .catch(err => res.status(500).json({ message: "Error retrieving distribution revenue", error: err }));
};
