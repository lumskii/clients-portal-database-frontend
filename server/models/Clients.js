const mongoose = require("mongoose");
const mongodbErrorHandler = require("mongoose-mongodb-errors");
const Schema = mongoose.Schema;

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
    grossCor: {
        type: Number,
        maxlength: 3,
    },
    grossCorRights: {
        type: String,
        maxlength: 50,
        required: true,
    },
    salesFee: {
        type: Number,
        maxlength: 3,
    },
    producerPay: {
        type: String,
        maxlength: 50,
        required: true,
    },
    expenseCap: {
        type: Number,
        maxlength: 20,
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
    otherExps: {
        type: String,
        maxlength: 50,
        required: true,
    },
    accountingTerms: {
        type: String,
        maxlength: 50,
        required: true,
    }
});

ClientSchema.plugin(mongodbErrorHandler);

module.exports = {
    ClientSchema: mongoose.model('Client', ClientSchema),
};