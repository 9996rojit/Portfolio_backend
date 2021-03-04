/* eslint-disable no-underscore-dangle */
// eslint-disable-next-line no-underscore-dangle
const Worked = require('../../model/Worked');

module.exports = {
  Query: {
    async GetWorkedFor() {
      const res = await Worked.findOne({}).sort({ _id: -1 });
      return {
        ...res._doc,
        id: res._id,
      };
    },
  },
  Mutation: {
    async CreateWorkedFor(_,
      {
        ProjectsCompleted,
        CupOfCoffee,
        SatisfiedClients,
        Startups,

      }) {
      // const logoId = await uploadFile(Logo).then((file) => file.id);
      // const BannerBackgroundImageId = await uploadFile(BannerBackgroundImage)
      //   .then((file) => file.id);
      // const AvatarId = await uploadFile(Avatar).then((file) => file.id);
      const newWorkedfor = new Worked({
        ProjectsCompleted,
        CupOfCoffee,
        SatisfiedClients,
        Startups,
        createdAt: new Date(),
      });
      const res = await newWorkedfor.save();
      console.log(res);
      return {
        ...res._doc,

        id: res._id,
      };
    },
    async UpadteWorkedFor(_, updates) {
      const res = await Worked.findByIdAndUpdate(updates.id, {
        ...updates,
      }, { new: true });
      return res;
    },
  },

};
