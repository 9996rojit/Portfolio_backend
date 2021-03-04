/* eslint-disable no-underscore-dangle */
const Config = require('../../model/config');
const About = require('../../model/about');
require('dotenv').config();
// const uploadFile = require('../../utils/UploadFiles');

module.exports = {
  Query: {
    async GetAboutMe() {
      const res = await About.findOne({}).sort({ _id: -1 });
      console.log({ res });
      return {
        ...res._doc,
        id: res._id,
      };
    },
  },
  AboutMe: {
    async config(parent) {
      const config = await Config.findOne({ _id: parent.config });
      return config;
    },
  },
  Mutation: {
    async CreateAboutMe(_,
      {
        config,
        Description,
        DownloadCvButton,

      }) {
      const newAboutme = new About({
        config,
        Description,
        DownloadCvButton,
        createdAt: new Date(),
      });
      const res = await newAboutme.save();
      return {
        ...res._doc,
        id: res._id,
      };
    },
    async UpdateAboutMe(_, updates) {
      const res = await About.findByIdAndUpdate(updates.id, {
        ...updates,
      }, { new: true });
      return res;
    },
  },

};
