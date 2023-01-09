const mongoose = require("mongoose");
const mongodbErrorHandler = require("mongoose-mongodb-errors");
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

const SalesSchema = new Schema({
  salesId: {
    type: Schema.Types.ObjectId,
  },
  client: {
    type: Schema.Types.ObjectId,
    ref: "Client",
  },
  cName: {
    type: String,
    maxlength: 20,
  },
  territory: {
    type: String,
    maxlength: 50,
  },
  salesAmount: {
    type: Number,
    maxlength: 20,
  },
  receivedAmount: {
    type: Number,
    maxlength: 20,
  },
  dealCD: {
    type: Date,
  },
  dealED: {
    type: Date,
  },
});

ExpenseSchema.plugin(mongodbErrorHandler);

module.exports = mongoose.model("Sales", SalesSchema, "Sales");