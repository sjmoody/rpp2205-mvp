const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const IntentionSchema = new Schema({
  title: String,
  suggestions: [String],
});

async function getIntentions() {
  console.log("getting intentions")
  await mongoose.connect('mongodb://localhost:27017/stanislavski');
  console.log("db connected")
  const intentions = await Intention.find();
  console.log(`intentions found. Count: ${intentions.length}`);
  console.log(`in db type of intentions: ${typeof intentions}`)
  return intentions;
}


const Intention = mongoose.model('Intention', IntentionSchema)
// module.exports = { Intention };
module.exports.getIntentions = getIntentions;