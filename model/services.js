const { model, Schema } = require('mongoose');

const ServiceSchema = new Schema({
  icon: String,
  WorkTitle: [{
    key: String,
    value: String,
  }],
  createdAt: Date,

});

module.exports = model('service', ServiceSchema);
