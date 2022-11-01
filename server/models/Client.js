const mongoose = require("mongoose");
const mongodbErrorHandler = require("mongoose-mongodb-errors");
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

const ClientSchema = new Schema({
    clientId: {
        type: Schema.Types.ObjectId,
    },
    filmName: {
        type: String,
        maxlength: 50,
        required: true,
        default: ''
    },
    producersEmail: {
        type: String,
        maxlength: 50,
        required: true,
    },
    filmsCode: {
        type: String,
        maxlength: 12,
        required: true,
    },
    distributionType: {
        type: String,
        maxlength: 50,
        required: true,
    },
    rightSale: {
        type: String,
        maxlength: 3,
        required: true,
    },
    cama: {
        type: String,
        maxlength: 3,
        required: true,
    },
    countryLaw: {
        type: String,
        maxlength: 50,
        required: true,
    },
    stateLaw: {
        type: String,
        maxlength: 50,
        required: true,
    },
    effectiveDate: {
        type: Date,
    },
    dateSignature: {
        type: Date,
    },
    renewalDate: {
        type: Date,
    },
    renewalExpiration: {
        type: Date,
    },
    expenseCap: {
        type: String,
        maxlength: 100,
    },
    customExp: {
        type: String,
        maxlength: 100,
    },
    expense: {
        type: Number,
        maxlenght: 20,
    },
    grossCor: {
        type: Number,
        maxlength: 3,
    },
    grossCorRights: {
        type: String,
        maxlength: 50,
        required: true,
    },
    producerPay: {
        type: String,
        maxlength: 20,
        required: true,
    },
    deliveryFees: {
        type: Number,
        maxlength: 20,
    },
    distributionFee: {
        type: Number,
        maxlength: 3,
    },
    incomeReserves: {
        type: Number,
        maxlength: 3,
    },
    accountingTerms: {
        type: String,
        maxlength: 50,
        required: true,
    }
});

ClientSchema.plugin(mongodbErrorHandler);

module.exports = mongoose.model('Client', ClientSchema, 'Client');