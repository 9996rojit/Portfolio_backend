const { model, Schema } = require('mongoose');

const ExperienceSchema = new Schema({
  date: [Date],
  heading: [{
    key: String,
    value: String,
  }],
  createdAt: Date,

});

module.exports = model('experience', ExperienceSchema);
