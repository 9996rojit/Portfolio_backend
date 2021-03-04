/* eslint-disable no-underscore-dangle */

const Service = require('../../model/services');

module.exports = {
  Query: {
    async GetServices() {
      const res = await Service.findOne({}).sort({ _id: -1 });
      return {
        ...res._doc,
        id: res._id,
      };
    },
    async GetService(_, { id }) {
      const service = await Service.findById(id);
      return service;
    },
  },
  Mutation: {
    async CreateServices(_,
      {
        icon,
        WorkTitle,

      }) {
      // const logoId = await uploadFile(Logo).then((file) => file.id);
      // const BannerBackgroundImageId = await uploadFile(BannerBackgroundImage)
      //   .then((file) => file.id);
      // const AvatarId = await uploadFile(Avatar).then((file) => file.id);
      const newService = new Service({
        icon,
        WorkTitle,
        createdAt: new Date(),
      });
      const res = await newService.save();
      console.log(res);
      return {
        ...res._doc,

        id: res._id,
      };
    },
    async UpdateServices(_, updates) {
      const res = await Service.findByIdAndUpdate(updates.id, {
        ...updates,
      }, { new: true });
      return res;
    },
  },

};
