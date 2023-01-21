const mongoose = require("mongoose");
const mongodbErrorHandler = require("mongoose-mongodb-errors");
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

const ExpenseSchema = new Schema({
    expenseId: {
        type: Schema.Types.ObjectId, ref:'Client'
    },
});

ExpenseSchema.plugin(mongodbErrorHandler);

module.exports = mongoose.model('Expense', ExpenseSchema, 'Expense');