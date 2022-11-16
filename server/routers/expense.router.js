const express = require('express');
const router = express.Router();
const expenseController = require('../controllers/Expense.controller');

router.post("/", expenseController.insertExpense);

router.get('/', expenseController.getAllExpenses)

router.get('/:id', expenseController.getExpenseByClientId);

module.exports = router;