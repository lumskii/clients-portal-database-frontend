const mongoose = require('mongoose');
const mongodbErrorHandler = require('mongoose-mongodb-errors');

const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

const titleSchema = new Schema({
  files: Array,
  accessLog: Array,
  jobs: Array,
  title: String,
  metadata: String,
  dateAdded: { type: Date, default: Date.now },
  packages: Array,
  status: String,
  directories: Array,
  folder: String,
});

titleSchema.plugin(mongodbErrorHandler);

module.exports = mongoose.model('Title', titleSchema, 'Title');
