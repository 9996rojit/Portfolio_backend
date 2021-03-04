const { model, Schema } = require('mongoose');

const RecentSchema = new Schema({
  Title: String,
  ProjectImage: [String],
  Description: String,
  date: [Date],
  Link: String,
  createdAt: Date,

});
module.exports = model('recent', RecentSchema);
