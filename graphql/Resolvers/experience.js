/* eslint-disable no-underscore-dangle */

const Experience = require('../../model/experience');

module.exports = {
  Query: {
    async GetExperience() {
      const res = await Experience.findOne({}).sort({ _id: -1 });
      return {
        ...res._doc,
        id: res._id,
      };
    },
  },
  Mutation: {
    async CreateExperience(_,
      {
        date,
        heading,

      }) {
      // const logoId = await uploadFile(Logo).then((file) => file.id);
      // const BannerBackgroundImageId = await uploadFile(BannerBackgroundImage)
      //   .then((file) => file.id);
      // const AvatarId = await uploadFile(Avatar).then((file) => file.id);
      const newExperience = new Experience({
        date,
        heading,
        createdAt: new Date(),
      });
      const res = await newExperience.save();
      console.log(res);
      return {
        ...res._doc,

        id: res._id,
      };
    },
    async UpdateExperience(_, updates) {
      const res = await Experience.findByIdAndUpdate(updates.id, {
        ...updates,
      }, { new: true });
      return res;
    },
  },

};
