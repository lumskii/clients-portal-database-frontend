const mongoose = require("mongoose");
const mongodbErrorHandler = require("mongoose-mongodb-errors");
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

const ExpenseSchema = new Schema({
    expenseId: {
        type: Schema.Types.ObjectId, ref:'Client'
    },
    dateExp: {
        type: Date, default: Date.now
    },
    cType: {
        type: String,
        maxlength: 20,
    },
    describe: {
        type: String,
        maxlength: 150,
    },
    amount: {
        type: Number,
        maxlength: 20,
    }
});

ExpenseSchema.plugin(mongodbErrorHandler);

module.exports = mongoose.model('Expense', ExpenseSchema, 'Expense');