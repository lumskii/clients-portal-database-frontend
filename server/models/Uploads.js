const mongoose = require("mongoose");
const mongodbErrorHandler = require("mongoose-mongodb-errors");
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

const UploadSchema = new Schema({
    avatar: {
        data: Buffer,
        contentType: String,
    },
});

UploadSchema.plugin(mongodbErrorHandler);

module.exports = ImageModel = mongoose.model('Upload', UploadSchema, 'Upload');
