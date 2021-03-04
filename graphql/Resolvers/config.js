/* eslint-disable no-underscore-dangle */
const Config = require('../../model/config');
require('dotenv').config();
// const uploadFile = require('../../utils/UploadFiles');

module.exports = {
  Query: {
    async GetConfig() {
      const res = await Config.findOne({}).sort({ _id: -1 });
      return {
        ...res._doc,
        id: res._id,
      };
    },
  },
  Mutation: {
    async CreateConfig(_,
      {
        Logo,
        Contact,
        Email,
        PhoneNumber,
        BannerBackgroundImage,
        Avatar,
        Title,
        UpTitle,
        WorkIdo,
        LinkFb,
        LinkTwitter,
        LinkInsta,
        LinkYoutube,
        LinkLinkedin,
        ButtomLinks,

      }) {
      // const logoId = await uploadFile(Logo).then((file) => file.id);
      // const BannerBackgroundImageId = await uploadFile(BannerBackgroundImage)
      //   .then((file) => file.id);
      // const AvatarId = await uploadFile(Avatar).then((file) => file.id);
      const newConfig = new Config({
        // Logo: logoId,
        Logo,
        Contact,
        Email,
        PhoneNumber,
        // BannerBackgroundImage: BannerBackgroundImageId,
        // Avatar: AvatarId,
        BannerBackgroundImage,
        Avatar,
        Title,
        UpTitle,
        WorkIdo,
        LinkFb,
        LinkTwitter,
        LinkInsta,
        LinkYoutube,
        LinkLinkedin,
        ButtomLinks,
        createdAt: new Date(),
      });
      const res = await newConfig.save();
      console.log(res);
      return {
        ...res._doc,
        id: res._id,
      };
    },
    async UpdateConfig(_, updates) {
      const res = await Config.findByIdAndUpdate(updates.id, {
        ...updates,
      }, { new: true });
      return res;
    },
  },

};
