const { model, Schema } = require('mongoose');

const configSchema = new Schema({
  // Logo: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'fs.files',
  // },
  Logo: String,
  Contact: String,
  Email: String,
  PhoneNumber: String,
  // BannerBackgroundImage: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'fs.files',
  // },
  BannerBackgroundImage: String,
  // Avatar: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'fs.files',
  // },
  Avatar: String,
  Title: String,
  UpTitle: String,
  WorkIdo: String,
  LinkFb: String,
  LinkTwitter: String,
  LinkInsta: String,
  LinkYoutube: String,
  LinkLinkedin: String,
  ButtomLinks: String,
  createdAt: Date,

});

module.exports = model('Config', configSchema);
