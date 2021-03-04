/* eslint-disable no-underscore-dangle */

const Recent = require('../../model/Recent');

module.exports = {
  Query: {
    async GetRecents() {
      const res = await Recent.findOne({}).sort({ _id: -1 });
      return {
        ...res._doc,
        id: res._id,
      };
    },
    async GetRecent(_, { id }) {
      const recent = await Recent.findById(id);
      return recent;
    },
  },
  Mutation: {
    async CreateServices(_,
      {
        Title,
        ProjectImage,
        Description,
        date,
        Link,
      }) {
      // const logoId = await uploadFile(Logo).then((file) => file.id);
      // const BannerBackgroundImageId = await uploadFile(BannerBackgroundImage)
      //   .then((file) => file.id);
      // const AvatarId = await uploadFile(Avatar).then((file) => file.id);
      const newRecent = new Recent({
        Title,
        ProjectImage,
        Description,
        date,
        Link,
        createdAt: new Date(),
      });
      const res = await newRecent.save();
      console.log(res);
      return {
        ...res._doc,
        id: res._id,
      };
    },
  },

};
