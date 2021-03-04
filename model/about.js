const { model, Schema } = require('mongoose');

const About = new Schema({
  config: {
    type: Schema.Types.ObjectId,
    ref: 'Config',
  },
  Description: String,
  DownloadCvButton: String,
  createdAt: Date,
});

module.exports = model('about', About);
