// const mongoose = require('mongoose');
const ConfigResolver = require('./config');
const AboutMeResolver = require('./About');
const ServiceResolver = require('./Services');
const WorkedResolver = require('./Worked');
const ExperienceResolver = require('./experience');
const RecentResolver = require('./Recent');

module.exports = {
  Query: {
    ...ConfigResolver.Query,
    ...AboutMeResolver.Query,
    ...ServiceResolver.Query,
    ...WorkedResolver.Query,
    ...ExperienceResolver.Query,
    ...RecentResolver.Query,

  },
  AboutMe: {
    ...AboutMeResolver.AboutMe,
  },
  Mutation: {
    ...ConfigResolver.Mutation,
    ...AboutMeResolver.Mutation,
    ...ServiceResolver.Mutation,
    ...WorkedResolver.Mutation,
    ...ExperienceResolver.Mutation,
    ...RecentResolver.Mutation,

  },
};
