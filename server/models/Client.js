const mongoose = require("mongoose");
const mongodbErrorHandler = require("mongoose-mongodb-errors");
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

const ClientSchema = new Schema({
    clientId: {
        type: Schema.Types.ObjectId, ref:'Expense'
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
    },
    filmsCode: {
        type: String,
        maxlength: 12,
        required: true,
    },
    distributionType: {
        type: String,
        maxlength: 50,
    },
    rightSale: {
        type: String,
        maxlength: 3,
    },
    cama: {
        type: String,
        maxlength: 3,
    },
    countryLaw: {
        type: String,
        maxlength: 50,
    },
    stateLaw: {
        type: String,
        maxlength: 50,
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
    },
    producerPay: {
        type: String,
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
    accountingTerms: {
        type: String,
        maxlength: 50,
    },
    avatar: {
        type: String,
    }
});

// ClientSchema.virtual('avatarPath').get(function() {
//     if (this.avatar != null && this.avatarType != null) {
//       return `data:${this.avatarType};charset=utf-8;base64,${this.avatar.toString('base64')}`
//     }
//   });

ClientSchema.plugin(mongodbErrorHandler);

module.exports = mongoose.model('Client', ClientSchema, 'Client');