const Expense = require('../models/Expense');

exports.insertExpense = (req, res, next) => {
  const dateExp = req.body.dateExp;
  const cType = req.body.cType;
  const describe = req.body.describe;
  const amount = req.body.amount;

  const info = {
    dateExp,
    cType,
    describe,
    amount,
  };

  if (!dateExp || !cType || !amount) {
    return res.json({
      status: 500,
      message: 'Some fields are empty.',
    });
  }

  const expenseObj = Expense(info);

  expenseObj.save(function (err, dbExpense) {
    if (err) {
      return res.json({
        status: 500,
        message: 'Unable to save expense amenity',
        err,
      });
    }

    return res.json({
      success: true,
      status: 200,
      data: {
        message: 'Expense Added Successfully.',
        newExpense: dbExpense,
      },
    });
  });
};

exports.getExpenseByClientId = (req, res) => {
  let id = req.params.id;

  Expense.findById(id, function (err, expense) {
    if (err) return res.json({ success: false, error: err });

    console.log('get expense details per clients', expense);

    return res.json({ success: true, expense });
  });
  // Expense.find({clientId: id}, callback)
  // .populate({path: 'clientId', select: [ 'filmName']});
};

exports.getAllExpenses = (req, res, next) => {
  Expense.find({}, function (err, expenses) {
    if (err)
      return res.json({
        status: 500,
        message: 'Error occured in retrieving expenses',
      });

    if (!expenses) {
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
          expenses,
        },
      });
    }
  });
};
