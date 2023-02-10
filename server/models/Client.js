const mongoose = require('mongoose');
const mongodbErrorHandler = require('mongoose-mongodb-errors');
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
    default: '',
  },
  producersEmail: {
    type: String,
    maxlength: 50,
  },
  filmsCode: {
    type: String,
    maxlength: 12,
    required: true,
    // unique: true,
  },
  distributionType: {
    type: String,
    maxlength: 50,
  },
  runtime: {
    type: String,
    maxlength: 12,
  },
  genre: {
    type: String,
  },
  rightSale: {
    type: String,
    maxlength: 3,
  },
  rightSaleOpt: {
    type: String,
  },
  comment: {
    type: String,
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
  gross: [
    {
      grossCor: {
        type: Number,
        default: 0,
      },
      grossCorRights: {
        type: String,
      },
    },
  ],
  fees: [
    {
      salesFee: {
        type: Number,
        default: 0,
      },
    },
  ],
  distributionFee: {
    type: Number,
    maxlength: 3,
  },
  incomeReserves: {
    type: Number,
    maxlength: 3,
  },
  ingestionFee: {
    type: Number,
    maxlength: 20,
  },
  marketingCap: {
    type: String,
  },
  filmMarketCost: {
    type: Number,
    maxlength: 20,
  },
  accountingTerms: {
    type: String,
    maxlength: 50,
  },
  reportingSchedule: {
    type: String,
  },
  reportingStartDate: {
    type: Date,
  },
  avatar: {
    data: Buffer,
    contentType: String,
  },
  sales: [
    {
      cName: {
        type: String,
        maxlength: 20,
        required: true,
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
    },
  ],
  expenses: [
    {
      dateExp: {
        type: Date,
        default: Date.now,
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
      },
    },
  ],
  distributionRev: [
    {
      cName: {
        type: String,
        maxlength: 20,
        required: true,
      },
      cType: {
        type: String,
        maxlength: 20,
      },
      platformOption: {
        type: String,
        maxlength: 20,
      },
      rType: {
        type: String,
        maxlength: 20,
      },
      territory: {
        type: String,
        maxlength: 50,
      },
      revenueAmount: {
        type: Number,
        maxlength: 20,
      },
      receivedAmount: {
        type: Number,
        maxlength: 20,
      },
      postDate: {
        type: Date,
        default: Date.now,
      }
    },
  ],
  postDate: {
    type: Date,
    default: Date.now,
  },
});

ClientSchema.plugin(mongodbErrorHandler);

module.exports = mongoose.model('Client', ClientSchema, 'Client');
