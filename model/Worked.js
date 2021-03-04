const { model, Schema } = require('mongoose');

const WorkedSchema = new Schema({
  ProjectsCompleted: String,
  CupOfCoffee: String,
  SatisfiedClients: String,
  Startups: String,
  createdAt: Date,

});

module.exports = model('Worked', WorkedSchema);
